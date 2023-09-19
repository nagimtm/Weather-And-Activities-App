import { Fragment } from "react";
import "./list.css";

export default function List({ activities, onDeleteActivity }) {
  // isGoodWeather.map((good) => console.log(good));
  return (
    <div className="newActivity">
      {activities.map((activity) => (
        <Fragment key={activity.id}>
          <li>
            {activity.name}

            <button className="delete-button" onClick={onDeleteActivity}>
              x
            </button>
          </li>
        </Fragment>
      ))}
    </div>
  );
}
