import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/User/Home/Home";

// import Legal from "./Pages/Legal";
// import NotFound from "./Pages/NotFound";
// import Appointment from "./Pages/Appointment";
// import DoctorRegistrationForm from "./Pages/DoctorRegistration";
// import DoctorLoginForm from "./Components/DoctorLogin";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

/* <Route path="/legal" element={<Legal />} />
    <Route path="/appointment" element={<Appointment />} />
    <Route path="/registration" element={<DoctorRegistrationForm />} />
    <Route path="/login" element={<DoctorLoginForm />} />
    <Route path="*" element={<NotFound />} /> */
