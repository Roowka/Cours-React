import Button from "../components/Button";

function Home() {
  function onClick() {
    console.log("Click !");
  }

  return (
    <div>
      Hello world!
      <Button
        name="Danger"
        className="btn-danger"
        onClick={onClick || null}
        yelling
      />
      <Button
        name="GMK"
        className="btn-secondary"
        link="https://www.youtube.com/watch?v=Jxd2ObaK598"
      />
    </div>
  );
}

export default Home;
