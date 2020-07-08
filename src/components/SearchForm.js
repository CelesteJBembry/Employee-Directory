import React from "react";

function SearchField(props) {
    return (
        <form>
        <div className="form-group">
          <label htmlFor="search">Search:</label>
          <input
            onChange={props.handleInputChange}
            value={props.value}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search For an Employee"
            id="search"
          />
        </div>
      </form>
    );
}


export default SearchField;
