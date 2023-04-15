import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./pages/login/login";
import Otp from "./pages/otp/otp";
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="login" element={<Login />} />
        <Route path="otp" element={<Otp />} />
    </Routes>
  </BrowserRouter>
  );
}
export default App;
