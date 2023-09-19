import "./list.css";

export default function List({ value, name, isGoodWeather }) {
  return (
    <>
      <li
        key={value}
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
