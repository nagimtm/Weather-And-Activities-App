import { useState } from "react";

export function Form() {
  return (
    <form className="form" aria-labelledby="weather-activities">
      <h1>Header</h1>
      <label htmlFor="activity-name">Activity Name</label>
      <input
        id="activity-name"
        type="text"
        name="activity-name"
        placeholder="write your activity here..."
      ></input>
      <label htmlFor="good-or-bad">Check if it's good weather</label>
      <input id="good-or-bad" name="good-or-bad" type="checkbox"></input>
      <button type="submit">Submit</button>
    </form>
  );
}
