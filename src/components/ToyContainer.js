import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ data, filterData }) {

  let toyElements = [];

  for (let i = 0; i < data.length; i++) {
    let currentData = data[i];

    toyElements.push(<ToyCard
      filterData={filterData}
      key={currentData.id}
      name={currentData.name}
      imgURL={currentData.image}
      likes={currentData.likes}
      id={currentData.id}
    />)
  }

  return (
    <div id="toy-collection">{toyElements}</div>
  );
}

export default ToyContainer;
