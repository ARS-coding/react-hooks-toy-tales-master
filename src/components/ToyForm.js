import React from "react";

function ToyForm({functions}) { // functionsis an object of functions
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={functions.handleFormSubmit}> 
        <h3>Create a toy!</h3>
        <input
          onChange={functions.handleInputChange}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          onChange={functions.handleInputChange}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
