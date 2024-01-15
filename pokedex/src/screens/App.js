import "./App.css";
import Generation from "../components/Generation";
import GenerationList from "../GenerationList";

function App() {
  return (
    <div className="m-3">
      <h1 className="">Pokedex avec React !</h1>
      {GenerationList.map((gen) => (
        <Generation gen_id={gen.id} name={gen.name} />
      ))}
    </div>
  );
}

export default App;
