import logo from "./logo.svg";
import "./App.css";
import Header from "./pages/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Product from "./pages/Product";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/products" element={<Product/>}>
          
          
          
          </Route>
          <Route path="/productsdetail" element={<DetailPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
