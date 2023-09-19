import localStorage from "use-local-storage-state";
import "./list.css";

export default function List({ name, isGoodWeather }) {
  const [activities, setActivities] = localStorage("activities", {
    defaultValue: [],
  });
  return (
    <>
      <li
        className={`activity__name${
          isGoodWeather ? "activity__name-good" : "activity__name-bad"
        }`}
      >
        {name}
      </li>
    </>
  );
}
