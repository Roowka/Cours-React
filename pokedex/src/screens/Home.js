import Generation from "../components/Generation";
import GenerationList from "../GenerationList";

function Home() {
  return (
    <div className="m-3">
      <h1 className="">Pokedex avec React !</h1>
      {GenerationList.map((gen, index) => (
        <Generation key={index} gen_id={gen.id} name={gen.name} />
      ))}
    </div>
  );
}

export default Home;
