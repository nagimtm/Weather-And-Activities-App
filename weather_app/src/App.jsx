import { useState, useEffect } from "react";
function App() {
  const [] = useState();
  async function weatherFetch() {
    try {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const data = await response.json();
      console.log("data", data);
    } catch (error) {
      console.log("Error", error);
    }
  }
  useEffect(() => {
    weatherFetch();
  });
  //return
}

export default App;
