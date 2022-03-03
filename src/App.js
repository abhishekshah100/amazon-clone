import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./component/Checkout/Checkout";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/checkout" element={<Checkout /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
