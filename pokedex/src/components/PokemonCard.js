function PokemonCard(props) {
  function getImageSrcFromIndex(index) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`;
  }

  return (
    <div className="card m-3" style={{ width: "12rem" }}>
      <div className="card-body">
        <div className="text-center">
          <img src={getImageSrcFromIndex(props.index)} alt="" />
          <h5 className="card-title text-capitalize">{props.name}</h5>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
