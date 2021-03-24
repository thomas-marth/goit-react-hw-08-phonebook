import React from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import routes from "../../routes";

function StartPage() {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>Телефонная книга</h1>
        <p></p>
        <p>
          Удобное приложение для безопасного хранения и управления личными
          контактами.
        </p>
        <p>
          <Link to={routes.register}>
            <Button variant="primary">Попробовать бесплатно</Button>
          </Link>
        </p>
      </Container>
    </Jumbotron>
  );
}

export default StartPage;
