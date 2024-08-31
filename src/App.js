import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [advice, setAdvice] = useState("");

  // Function to fetch advice from the API
  const fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        setAdvice(response.data.slip.advice); // Update the state with the fetched advice
      })
      .catch((error) => {
        console.error("Error fetching advice:", error);
      });
  };

  useEffect(() => {
    console.log("Component Did Mount");
    fetchAdvice(); // Fetch advice once on mount
  }, []); // Empty dependency array means this effect runs once, similar to componentDidMount

  return (
    <div>
      <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button className="button" onClick={fetchAdvice}>
            <span>Give Me Advice!</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;


