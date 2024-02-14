import { OpenAI } from "openai";

//structs
import { recipeRequest } from "../../common/structs/recipeForApi.ts";
import { Recipe } from "common/structs/recipe.ts";
import { timeout } from "unyt_core/datex_all.ts";

await Datex.Supranet.connect();

const client = new OpenAI({
  apiKey: Deno.env.get("OPENAI_API_KEY"),
  dangerouslyAllowBrowser: true,
});

@endpoint
export class RecipeAiBackend {
  @timeout(30_000)
  @property
  static async sendRecipeRequest(req: recipeRequest): Promise<Recipe> {
    const chatComplete = await client.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `Du erhälst ein dictionary, welches eine Liste von Zutaten enthält. 
        Die Zutaten sind dictionariess unt enthalten den Namen die Menge und die Einheit, wobei gr für gramm, ml für milliliter und st für stück steht. 
        Außerdem ist in dem dictionary eine Liste von Kategorien gegeben, versuche dich möglichst an die Kategorien zu halten.
        Generiere ein Rezept in denen du nur die zutaten bis zur genannenten menge verwendest (Du musst nicht die ganze menge benutzen) die in dem dictionary gegeben sind, du darfst zusätzlich wasser und alle Gewürze verwenden.
        Gebe außschließlich ein dictionary zurück welches eine Liste von Zutaten(wie vorher beschrieben) enthält, nur das die Zutaten und mengen angaben an das Rezept angepasst sind und auch nur in den mengen angaben ml,gr und st und eine description enthält.
        Das antwort dictionary hat also die struktur {"ingredients": [{"ingredient": "zutat", "amount": menge als zahl, "unit": "einheit als ml, gr oder st es dürfen ausschließlich diese einheiten verwendet werden"}], "instruction": "beschreibung",
         timeInMinutes: dauer in minuten als zahl, "servings": anzahl der portionen als zahl, "category": "Diary, Meat, Fish oder Vegan ist nur eine category und muss 100% eine von den vier sein es soll nichts von den kategorien sein, die dir vorher übergeben wurden und die Kategorie MUSS Ansatzweise Passen", tags:"eine liste an string, die passen z.B aus welchem land es kommt, ob es er ketogen ist etc."}.
        Die Antort MUSS dieses format enthalten und darf keine weiteren informationen enthalten, dies muss 100% gewährleistet werden.
        Es soll ein gutes und vollständiges rezept sein und es muss nicht alles verwendet werden, wenn es dadurch nicht schmeckt.`,
        },
        {
          role: "user",
          content: JSON.stringify(req),
        },
      ],
      model: "gpt-4-0125-preview",
    });
    const response = JSON.parse(chatComplete.choices[0].message.content!);
    const recipeResponse: Recipe = response;
    console.log("GPT-3 response: ", recipeResponse);
    writeJson("./test.json", recipeResponse);
    return recipeResponse;
  }
}

async function writeJson(filePath: string, o: any) {
  console.log("writing json");
  try {
    await Deno.writeTextFile(filePath, JSON.stringify(o));
  } catch (e) {
    console.log(e);
  }
  console.log("finished writing json");
}
