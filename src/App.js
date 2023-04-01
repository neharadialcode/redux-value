import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import LoginForm from "./components/LoginForm";
import Faq from "./components/Faq";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route exact path="/" element={<Faq />} />
            <Route exact path="/login" element={<LoginForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
