import { useState } from "react";

import { Form } from "./Form";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useState("");

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }]);
  }

  return (
    <>
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
