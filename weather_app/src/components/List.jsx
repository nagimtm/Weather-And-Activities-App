import localStorage from "use-local-storage-state";

export default function List() {
  const [activities, setActivities] = localStorage("activities", {
    defaultValue: [],
  });
  return (
    <>
      <li>{}</li>
    </>
  );
}
