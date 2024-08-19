import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const Navbar = React.lazy(() => import("./components/Layout/Navbar/Navbar"));

// Main content
const Home = React.lazy(() => import("./components/Pages/PassengerTab"));
const CalculatePage = React.lazy(() =>
  import("./components/Pages/CalculateTab")
);
const OffsetPage = React.lazy(() => import("./components/Pages/OffsetPage"));

const Footer = React.lazy(() => import("./components/Layout/Footer/Footer"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={loading}>
          <div className="app-container">
            <Navbar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/calculate" element={<CalculatePage />} />
                <Route path="/offset" element={<OffsetPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
