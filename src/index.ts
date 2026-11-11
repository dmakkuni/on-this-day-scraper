interface WikipediaEvent {
  year: string;
  description: string;
}

interface WikipediaResponse {
  date: string;
  events: WikipediaEvent[];
}

async function fetchTodayInHistory() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  const url = `https://byabbe.se/on-this-day/${month}/${day}/events.json`;

  try {
    console.log(`Fetching historical events for ${month}/${day}...\n`);
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: WikipediaResponse = await response.json();

    console.log(`=== On This Day (${data.date}) ===\n`);

    // Display a random selection of 5 historical events.
    const sampleEvents = data.events.sort(() => 0.5 - Math.random()).slice(0, 5);

    sampleEvents.forEach(event => {
      console.log(`• [${event.year}] ${event.description}`);
    });

  } catch (error) {
    console.error('Failed to fetch historical data:', error);
  }
}

fetchTodayInHistory();
