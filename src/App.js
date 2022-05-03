import "./App.css";
import { Route, Routes } from "react-router-dom";
import { NavBar, Footer } from "./components"; //now gathers all components in the directory
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import DetailsPage from "./pages/DetailsPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
