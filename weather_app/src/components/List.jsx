import "./list.css";

export default function List({ name, isGoodWeather }) {
  return (
    <>
      <li
        className={`activity__name${
          isGoodWeather ? "activity__name-good" : "activity__name-bad"
        }`}
      >
        {name}
        {isGoodWeather}
      </li>
    </>
  );
}
