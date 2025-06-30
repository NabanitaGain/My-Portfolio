import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Toggle 'dark' class on <html> element based on darkMode state
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-6 py-2 bg-blue-600 text-white rounded"
      >
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>

      <h1 className="mt-10 text-3xl font-bold">
        Welcome to your {darkMode ? "Dark" : "Light"} Mode App!
      </h1>
    </div>
  );
}

export default App;
