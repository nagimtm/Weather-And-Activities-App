import { useEffect } from "react";
import { Form } from "./Form";
import { uid } from "uid";
import List from "./components/List";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const isGoodWeather = true;
  const [activities, setActivities] = useLocalStorageState("activity", {
    defaultValue: [],
  });

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }]);

    console.log(newActivity);
  }

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

  console.log("ACTIVITIES> ", activities);

  return (
    <>
      <Form onAddActivity={handleAddActivity} />
      <ul className="list">
        {activities.filter((activity) => (
          <List
            key={activity.id}
            name={activity.name}
            isGoodWeather={activity.isGoodWeather}
          />
        ))}
      </ul>
    </>
  );
}

export default App;
