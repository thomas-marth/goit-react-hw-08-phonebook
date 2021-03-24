import React from "react";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { getFilterValue } from "../../redux/contacts/contactsActions";

function FindContact({ getFilterValue }) {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="5">
          <p></p>
          <h2 className="row row-cols-md-5 justify-content-center">
            Найти контакты
          </h2>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Начните вводить имя"
              aria-label="Начните вводить имя"
              aria-describedby="basic-addon2"
              onChange={(e) => getFilterValue(e.target.value)}
            />
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
}

const mapDispatchToProps = {
  getFilterValue,
};

export default connect(null, mapDispatchToProps)(FindContact);
