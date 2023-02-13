import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
        <div className="container pt-4">
            <Routes>
                <Route exact={true} path="/" element={<HomePage/>}></Route>
                <Route exact={true} path="/about" element={<AboutPage/>}></Route>
            </Routes>
        </div>
    </>
  );
}

export default App;
