// openai_request.ts

// Ersetzen Sie 'your-openai-api-key' mit Ihrem tatsächlichen API-Schlüssel
const OPENAI_API_KEY = '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';

// Die URL für den API-Endpunkt, den Sie verwenden möchten
const apiEndpoint = 'https://api.openai.com/v1/engines/davinci-codex/completions';

// Die Daten, die Sie an die API senden möchten

// Eine asynchrone Funktion, die die POST-Anfrage durchführt
export async function fetchCompletion() {

	const requestData = {
		prompt: "Test'",
		temperature: 0.7,
		max_tokens: 60,
	  };

	console.log(requestData);
	  
  const response = await fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  });

  // Überprüfen, ob die Anfrage erfolgreich war
  if (response.ok) {
    const data = await response.json();
    console.log(data);
  } else {
    console.error('Anfrage fehlgeschlagen:', response.status);
  }
}