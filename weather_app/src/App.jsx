import { useEffect, useState } from "react";
import { Form } from "./Form";
import { uid } from "uid";
import List from "./components/List";
import useLocalStorageState from "use-local-storage-state";
import "./styles.css";

function App() {
  const [emoji, setEmoji] = useState("");
  const [temp, setTemp] = useState("");
  const [weather, setWeather] = useState("");
  const [activities, setActivities] = useLocalStorageState("activity", {
    defaultValue: [],
  });

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }]);
    console.log(newActivity);
  }
  function handleDeleteActivity(id) {
    setActivities(activities.filter((activity) => activity.id !== id));
  }

  async function weatherFetch() {
    try {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const data = await response.json();
      setWeather(data);
      setEmoji(data.condition);
      setTemp(data.temperature);
      console.log("data", data);
    } catch (error) {
      console.log("Error", error);
    }
  }
  useEffect(() => {
    weatherFetch();
  }, []);

  return (
    <>
      <header>
        <p className="weather--emoji">{emoji}</p>
        <p className="weather--temperature">{temp}C°</p>
      </header>
      <Form onAddActivity={handleAddActivity} />
      {activities.map((activity) => (
        <List
          key={activity.id}
          activities={activity.name}
          isGoodWeather={weather.isGoodWeather}
          onDeleteActivity={() => handleDeleteActivity(activity.id)}
        />
      ))}
    </>
  );
}

export default App;
