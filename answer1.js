const LAUNCHES_API_URL = "https://api.spacexdata.com/v4/launches";
const ROCKETS_API_URL = "https://api.spacexdata.com/v4/rockets";
const PAYLOADS_API_URL = "https://api.spacexdata.com/v4/payloads";

async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching data:", error);
    return null;
  }
}

// Fetching launches data
fetchData(LAUNCHES_API_URL)
  .then((launchesData) => {
    // Stored launches data in an array
    const launches = launchesData;
    console.log("Launches:", launches);
  })
  .catch((error) => {
    console.log("Error fetching launches data:", error);
  });

// Fetching rockets data
fetchData(ROCKETS_API_URL)
  .then((rocketsData) => {
    // Stored rockets data in an array
    const rockets = rocketsData;
    console.log("Rockets:", rockets);
  })
  .catch((error) => {
    console.log("Error fetching rockets data:", error);
  });

// Fetching payloads data
fetchData(PAYLOADS_API_URL)
  .then((payloadsData) => {
    // Stored payloads data in an array
    const payloads = payloadsData;
    console.log("Payloads:", payloads);
  })
  .catch((error) => {
    console.log("Error fetching payloads data:", error);
  });
