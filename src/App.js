import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Componentes/Home";
import Footer from "./Componentes/Footer";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-web-app.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  const [user, setUser] = useState(null);

  useEffect(() => {
    window.Telegram.WebApp.ready();

    // Get user data
    const user = window.Telegram.WebApp.initDataUnsafe.user;
    setUser(user);

    // Expand the app to full height
    window.Telegram.WebApp.expand();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
