import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import HomePage from "./HomePage";
import SeemorePage from "./SeemorePage";
import Singleproduct from "./SingleProductPage";
import Cart from "./Cart";
import Buy from "./Buy";
function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route exact path="/" element={<RegisterPage />} />

          <Route path="/Login" element={<LoginPage />} />

          <Route path="/Login/HomePage" element={<HomePage />} />

          <Route path="/Login/HomePage/:link" element={<SeemorePage />} />

          <Route path="/Login/HomePage/cart" element={<Cart />} />

          <Route path={`/Login/HomePage/:link/:id`} element={<Singleproduct />} />

          <Route exact path="/Login/HomePage/Buy" element={<Buy />} />


        </Routes>
      </Router>

    </>

  )
};

export default App;