import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import SignIn from "./Pages/SignIn";
import SignOut from "./Pages/SignOut";
import Profile from "./Pages/Profile";

const App=()=> {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/SignIn" element={<SignIn/>} />
          <Route path="/SignOut" element={<SignOut/>} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
