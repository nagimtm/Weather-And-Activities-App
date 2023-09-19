import "./list.css";

export default function List({ activities, isGoodWeather, onDeleteActivity }) {
  return (
    <div className="newActivity">
      <li>
        {activities}
        {isGoodWeather}
        <button className="delete-button" onClick={onDeleteActivity}>
          x
        </button>
      </li>
    </div>
  );
}
