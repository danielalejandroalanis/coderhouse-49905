import "./App.css";

function App() {
  const condition = false;
  // if (condition) {
  //   console.log("Hello World");
  // } else {
  //   console.log("Hello none");
  // }

  // document.addEventListener('onclick')

  //camelCase -- onclick --->  onClick={}
  //PascalCase -- AppComponent

  //CSS-in-JS
  const textStyles = {
    backgroundColor: condition ? "blue" : "black",
    fontSize: "1rem",
    marginTop: "10px",
  };

  return (
    <div className="red-text" style={textStyles}>
      {condition ? <h1>Verdadero</h1> : <h1>Falso</h1>}
      <h1>Hello World</h1>
      <p>My first react app</p>
    </div>
  );
}

export default App;
