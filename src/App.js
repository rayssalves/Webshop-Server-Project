import "./App.css";
import { Route, Routes } from "react-router-dom";
import { NavBar, Footer } from "./components";
import Header from "./components/Header"; //now gathers all components in the directory
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import { DetailsPage } from "./pages/DetailsPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
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
