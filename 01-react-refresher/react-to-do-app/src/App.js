import ToDo from "./components/ToDo";

function App() {
  return (
    <div>
      <h1>My ToDos</h1>
      <ToDo text="Learn React" />
      <ToDo text="Master React" />
      <ToDo text="Explore the full React course" />
    </div>
  );
}

export default App;
