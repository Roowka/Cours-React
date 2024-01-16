function Button(props) {
  return (
    <button onClick={props.onClick} className="btn btn-secondary">
      {props.name}
    </button>
  );
}

export default Button;
