// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState("true");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json()) // Parse the response to JSON
      .then((data) => {
        setImage(data.message); // Update the state with the dog image URL
        setLoading(false); // Set loading to false after fetching the image
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []); // Empty array means it runs once on mount

  return (
    <div>
      {loading ? <p>Loading...</p> : <img src={image} alt="A Random Dog" />}
    </div>
  );
}

export default App;
