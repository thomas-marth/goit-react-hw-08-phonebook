import React, { Component } from "react";
import { loginUser } from "../../redux/contacts/contactsOperations";
import { statusRemember } from "../../redux/status/statusActions";
import { connect } from "react-redux";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const initialState = {
  email: "",
  password: "",
};

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    this.props.loginUser(this.state);
    this.setState({ ...initialState });
  };

  handleCheked = (e) => {
    const { statusRemember } = this.props;
    const check = e.target.checked;
    statusRemember(check);
  };

  render() {
    const { email, password } = this.state;
    return (
      <Container>
        <br />
        <Row className="justify-content-md-center">
          <Col xs lg="5">
            <h2>Вход</h2>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Введите email"
                  suggested="email"
                  name="email"
                  value={email}
                  autoComplete="email"
                  onChange={this.handleChange}
                />
                <Form.Text className="text-muted">
                  Мы никому не передаем адрес вашей электронной почты.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Введите пароль"
                  suggested="password"
                  name="password"
                  value={password}
                  autoComplete="password"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Запомнить меня"
                  onChange={this.handleCheked}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="button"
                onClick={this.handleSubmit}
              >
                Войти
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  loginUser,
  statusRemember,
};

export default connect(null, mapDispatchToProps)(LoginPage);
