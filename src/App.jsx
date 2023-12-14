import "bootstrap/dist/css/bootstrap.min.css";
import { MainRouter } from "./router/MainRouter";

const App = () => {

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <MainRouter />
    </div>
  );
};

export default App;
