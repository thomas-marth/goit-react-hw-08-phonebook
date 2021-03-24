import React, { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { addUserContact } from "../../redux/contacts/contactsOperations";

const initialState = {
  firstName: "",
  secondName: "",
  number: "",
};

class AddContact extends Component {
  state = {
    firstName: "",
    secondName: "",
    number: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { firstName, secondName, number } = this.state;
    const fullName = `${firstName} ${secondName}`;
    const contact = {
      name: fullName.replace(/\b\w/g, (l) => l.toUpperCase()),
      number: number,
    };
    this.props.addUserContact(contact);
    this.setState({ ...initialState });
  };

  render() {
    const { firstName, secondName, number } = this.state;
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="5">
            <h2 className="row row-cols-md-5 justify-content-center">
              Добавить контакт
            </h2>
            {/* <Form> */}
            <Form>
              <Form.Group as={Col} controlId="FirstName">
                <Form.Label>Имя</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Имя"
                  name="firstName"
                  value={firstName}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="SecondName">
                <Form.Label>Фамилия</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Фамилия"
                  name="secondName"
                  value={secondName}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridNumber">
                <Form.Label>Номер</Form.Label>
                <Form.Control
                  type="Number"
                  placeholder="Введите номер"
                  name="number"
                  value={number}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form>
            <Button variant="primary" type="button" onClick={this.handleSubmit}>
              Добавить контакт
            </Button>
            {/* </Form> */}
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  addUserContact,
};

export default connect(null, mapDispatchToProps)(AddContact);
