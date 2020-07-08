import React, { Component } from "react";
import API from "../utils/API";
//import SearchForm from "./SearchForm";
//import EmployeeDetails from "./EmployeeDetails";

import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Table from "./Table";
import Thead from "./Thead";
import Tbody from "./Tbody";
//import Tr from "./TableRow";
//import Th from "./TableHeader";
//import Td from "./TableData";


class BaseContainer extends Component {
    state = {
      result: {},
      search: ""
    };

    componentDidMount() {
      this.searchEmployees("");
    }  
    searchEmployees = query => {
      API.search(query)
        .then(res => this.setState({ result: res.data }))
        .catch(err => console.log(err));
    };

handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployees(this.state.search);
  };


  render ()  {
      return (
      <Container>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Employee Directory</h1>
            <p class="lead">Use the search bar to find an employee.</p>
          </div>
        </div>
        <Row> 
          <Col size="md-4">
          </Col>
          
          <Col size="md-10">

              <Table class="table table-striped">
                <Thead>
                  <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                  </tr>
                </Thead>

                <Tbody>
                  <tr>
                    <td>Image</td>
                    <td>Name</td>
                    <td>Phone</td>
                    <td>Email</td>
                    <td>DOB</td>
                  </tr>
                </Tbody>
              </Table>
          </Col>
        </Row>
      </Container>
      )
  };
}


export default BaseContainer;
