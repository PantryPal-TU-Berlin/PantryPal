import { Component } from "uix/components/Component.ts";
import { ObjectRef } from "unyt_core/runtime/pointers.ts";
import { Ingredient } from "common/structs/recipe.ts";

interface PropsSearchBar {
  searchSpace: Ingredient[];
  onadd: (ingredient: Ingredient) => void;
}

@template<PropsSearchBar>((_, props) => {
  const searchInput = $$("");

  const searchRecommendations: ObjectRef<Ingredient[]> = $$([]);

  const displaySearchRecommendations = $$(false);

  function searchEngine(limited = true) {
    displaySearchRecommendations.val = searchInput.val != "";

    let tempResults: Ingredient[];
    if (limited) {
      tempResults = props.searchSpace
        .filter((element: Ingredient) =>
          element.ingredient
            .toLowerCase()
            .includes(searchInput.val.toLowerCase())
        )
        .slice(0, 5);
    } else {
      tempResults = props.searchSpace.filter((element: Ingredient) =>
        element.ingredient.toLowerCase().includes(searchInput.val.toLowerCase())
      );
    }

    tempResults.forEach((element) => {
      searchRecommendations.push(element);
    });
  }

  return (
    <div class="search-wrapper">
      <div class="search-box">
        <input
          type="text"
          class="search-input"
          placeholder="Search for ingredients"
          value={searchInput}
          oninput={() => searchEngine()}
          onblur={() => (displaySearchRecommendations.val = false)}
          onfocus={() => (displaySearchRecommendations.val = true)}
        />
        <i
          class="fa-solid fa-magnifying-glass search-button"
          onclick={() => searchEngine(false)}
        ></i>
      </div>
      <div
        class={{
          "search-recommendations": true,
          visible: displaySearchRecommendations,
        }}
      >
        {searchRecommendations.$.map((ingredient: Ingredient) => (
          <div class="search-selection" onclick={() => props.onadd(ingredient)}>
            {ingredient.ingredient}
          </div>
        ))}
      </div>
    </div>
  );
})
export class SearchBar extends Component {}
