import React from "react";
import { connect } from "react-redux";
import { getUserInfo } from "../../redux/contacts/contactsSelectors";
import { Jumbotron, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import routes from "../../routes";

function UserPage({ user }) {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>Телефонная книга</h1>
        <p></p>
        {user ? (
          <p>
            {user.name}, добро пожаловать в приложение Телефонная книга, которое
            позволит Вам легко и удобно управлять вашим персональным списком
            контактов.
          </p>
        ) : (
          <Spinner animation="border" />
        )}
        <p>
          Успейте воспользоваться бесплатным trial-периодом в течении 14-ти
          дней!
        </p>
        <p>
          <Link to={routes.contacts}>
            <Button variant="primary">Добавить контакты</Button>
          </Link>
        </p>
      </Container>
    </Jumbotron>
  );
}

const mapStateToProps = (state) => {
  return {
    user: getUserInfo(state),
  };
};

export default connect(mapStateToProps, null)(UserPage);
