import "./App.css";
import MainPage from "./page/MainPage.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
