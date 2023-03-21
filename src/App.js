import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomBtns from "./components/CustomBtns";
import Header from "./components/Header";
import CustomValue from "./components/CustomValue";
import ApiComponent from "./components/ApiComponent";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <CustomBtns /> */}
      <ApiComponent />

      {/* <CustomValue /> */}
    </div>
  );
}

export default App;
