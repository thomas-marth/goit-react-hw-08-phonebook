import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { removeContact } from "../../redux/contacts/contactsOperations";

function ContactListItem({ contact, removeContact }) {
  return (
    <Card
      className="col mb-5"
      border="primary"
      style={{ width: "18rem", margin: "10px", flex: "0 0 80%" }}
    >
      <Card.Body>
        <Card.Title>{contact.name}</Card.Title>
        <Card.Text>Номер: {contact.number}</Card.Text>
        <Button
          variant="primary"
          type="button"
          id={contact.id}
          onClick={(e) => removeContact(e.target.id)}
        >
          Удалить
        </Button>
      </Card.Body>
    </Card>
  );
}

const mapDispatchToProps = {
  removeContact,
};

export default connect(null, mapDispatchToProps)(ContactListItem);
