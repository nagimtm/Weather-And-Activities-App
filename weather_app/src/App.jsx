import { useState, useEffect } from "react";
import { Form } from "./Form";
import { uid } from "uid";
import Activity from "./Activity";
function App() {
  const isGoodWeather = true;
  const [activities, setActivities] = useState([]);

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }]);
    console.log(newActivity);
  }

  activities.filter((activity) => activity.isForGoodWeather === isGoodWeather);
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

  return (
    <>
      <Form onAddActivity={handleAddActivity} />
      <Activity
        name={activities.name}
        isGoodWeather={activities.isGoodWeather}
        onAddActivity={handleAddActivity}
      ></Activity>
    </>
  );
}

export default App;
