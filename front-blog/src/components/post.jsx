function Post(props) {
  return (
    <>
      <div className="card mt-3">
        <div className="card-body">
          <div className="d-flex">
            <h5 className="card-title me-3">{props.title}</h5>
            <p className="card-text ms-auto">- {props.date}</p>
          </div>
          <p className="card-text">{props.content}</p>
        </div>
      </div>
    </>
  );
}

export default Post;
