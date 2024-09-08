import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetch("https://cdn.drcode.ai/interview-materials/products.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((result) => {
        console.log(result); // Check the structure of the result here
        setData(result); // Save the fetched data to state
      })
      .catch((error) => {
        console.error("Failed to fetch data:", error);
      });
  }, []); // Empty dependency array means this useEffect runs only once after the initial render

  return (
    <div className="App">
      <h1>Product List</h1>
      <ul>
        {data.length > 0 ? (
          data.map((item) => (
            <li key={item.id}>{item.name}</li> // Assuming each item has an id and name
          ))
        ) : (
          <p>Loading data...</p>
        )}
      </ul>
    </div>
  );
}
