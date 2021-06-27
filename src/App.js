import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import Header from "./components/Header";
import ToyForm from "./components/ToyForm";
import ToyContainer from "./components/ToyContainer";

function App() {

  let dataURL = "http://localhost:3000/toys"; // if the thing doesn't get fetched, try the 3001 port

  const [fetchData, setFetchData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [inputState, setInputState] = useState({ name: "", image: "" });

  useEffect(() => {
    fetch(dataURL)
      .then(response => response.json())
      .then(json => setFetchData(json))
  }, []);

  function filterData(id) {
    setFetchData(fetchData.filter((dataObj) => dataObj.id != id))
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleInputChange(event) {
    setInputState({ ...inputState, [event.target.name]: event.target.value })
  }

  async function handleFormSubmit(event) {
    event.preventDefault()

    let response = await fetch(dataURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(inputState)
    });

    let json = await response.json();

    let updatedState = await [...fetchData, json];
    setFetchData(updatedState);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm functions={{ handleInputChange: handleInputChange, handleFormSubmit: handleFormSubmit }} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer filterData={filterData} data={fetchData} />
    </>
  );
}

export default App;
