import "./activity.css";
export default function Activity({ name, isGoodWeather }) {
  return (
    <div>
      <li
        className={`activity__name${
          isGoodWeather ? "activity__name-good" : "activity__name-bad"
        }`}
      >
        {name}
      </li>
    </div>
  );
}
