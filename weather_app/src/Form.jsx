import "./styles.css";
export function Form({ onAddActivity, name }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const activity = {
      name: data.name,
      isForGoodWeather: data?.checkGoodWeather,
    };
    onAddActivity(activity);
    event.target.reset();
    event.target.focus();
  }
  return (
    <form
      className="form"
      aria-labelledby="weather-activities"
      onSubmit={handleSubmit}
    >
      <h1>WAAA</h1>
      <div className="form--div">
        <label htmlFor="name">Add Activity</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="name of the activity..."
          maxLength="30"
        ></input>
      </div>
      <div className="form--div">
        <label htmlFor="checkGoodWeather">Good weather activity?</label>
        <input
          id="checkGoodWeather"
          name="checkGoodWeather"
          type="checkbox"
        ></input>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
