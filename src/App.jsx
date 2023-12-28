import { useState, useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
function App() {
  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) =>
      console.table(res.results)
    );
  };

  return <div className="App">Hello</div>;
}

export default App;
