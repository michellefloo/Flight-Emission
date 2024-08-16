import "./App.css";
import PassengerTab from "./components/Pages/PassengerTab";
import Footer from "./components/Layout/Footer/Footer";
import NavbarFlightEmission from "./components/Layout/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="app-container">
        <NavbarFlightEmission />
        <main className="main-content">
          <PassengerTab />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
