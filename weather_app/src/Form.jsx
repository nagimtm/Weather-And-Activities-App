import "./styles.css";
export function Form({ onAddActivity }) {
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
        <label htmlFor="name">Activity Name</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="write your activity here..."
        ></input>
      </div>
      <div className="form--div">
        <label htmlFor="checkGoodWeather">Check if it is good weather</label>
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
