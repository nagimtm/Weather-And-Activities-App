function App() {
  try {
    async function weatherFetch() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const data = await response.json();
      console.log("data", data);
    }
  } catch (error) {}
  weatherFetch();
  return;
}

export default App;
