function PokemonCard(props) {
  return (
    <div className="card m-3" style={{ width: "15rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
      </div>
    </div>
  );
}

export default PokemonCard;
