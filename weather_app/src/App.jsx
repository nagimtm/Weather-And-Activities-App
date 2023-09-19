import { useEffect, useState } from "react";
import { Form } from "./Form";
import { uid } from "uid";
import List from "./components/List";
import useLocalStorageState from "use-local-storage-state";
import "./styles.css";

function App() {
  const [emoji, setEmoji] = useState("");
  const [temp, setTemp] = useState("");
  const [weather, setWeather] = useState(true);
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

  // const filteredActivities = activities.filter(
  //   (activity) => activity.isForGoodWeather === weather.isGoodWeather
  // );

  async function weatherFetch() {
    try {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const data = await response.json();
      console.log("data", data);
      setWeather(data);
      setEmoji(data.condition);
      setTemp(data.temperature);
    } catch (error) {
      console.log("Error", error);
    }
  }
  useEffect(() => {
    const setInterval = weatherFetch();
    return () => clearInterval(setInterval);
  }, []);

  return (
    <>
      <header>
        <p className="weather--emoji">{emoji}</p>
        <p className="weather--temperature">{temp}C°</p>
      </header>
      <Form
        title={
          weather.isGoodWeather
            ? "good weather activities"
            : "bad weather activities"
        }
        onAddActivity={handleAddActivity}
      />
      {activities.map((activity) => (
        <List
          activities={activity.name}
          key={activity.id}
          isGoodWeather={weather.isGoodWeather}
          onDeleteActivity={() => handleDeleteActivity(activity.id)}
        />
      ))}
    </>
  );
}

export default App;
