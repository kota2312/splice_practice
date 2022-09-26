import "./styles.css";

export default function App() {
  let items = ["item1", "item2", "item3"];
  let remove = items.splice(0, 1);
  items.splice(1, 0, remove);

  return (
    <div className="App">
      <h1>splice practice</h1>
      <div>{items}</div>
    </div>
  );
}
