import { useState, useEffect } from "react";
import { Form } from "./Form";
import { uid } from "uid";

function App() {
  const isGoodWeather = true;
  activities.filter((activity) => activity.isForGoodWeather === isGoodWeather);
  const [activities, setActivities] = useState("");

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }]);
  }

  return (
    <>
      <Form onAddActivity={handleAddActivity} />
    </>
  );
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
}

export default App;
