import React from "react";
import Form from "react-bootstrap/Form";

const Search = ({ handleSearch }) => {
  const handleChange=(e)=>{
  handleSearch(e.target.value)
  }
  return (
    <Form className="input">
      <Form.Group className="mb-3 mt-5 w-50" controlId="text">
        <Form.Control onChange={handleChange} type="search" placeholder="Search Products" />
      </Form.Group>
    </Form>
  );
};

export default Search;
