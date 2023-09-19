import { useEffect } from "react";
import { Form } from "./Form";
import { uid } from "uid";
import List from "./components/List";
import useLocalStorageState from "use-local-storage-state";

function App() {
  let isForGoodWeather = true;
  const [activities, setActivities] = useLocalStorageState("activity", {
    defaultValue: [],
  });

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }]);
  }

  async function weatherFetch() {
    try {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const data = await response.json();
      console.log("api data ", data);
    } catch (error) {
      console.log("Error", error);
    }
  }
  useEffect(() => {
    const setInterval = weatherFetch();
    return () => clearInterval(setInterval);
  });

  return (
    <>
      <Form onAddActivity={handleAddActivity} />
      <ul className="list">
        {activities.map((activity) => (
          <List key={activity.id} name={activity.name} />
        ))}
      </ul>
    </>
  );
}

export default App;
