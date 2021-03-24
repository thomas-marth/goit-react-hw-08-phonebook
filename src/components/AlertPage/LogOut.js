import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/contacts/contactsOperations";

class LogOut extends Component {
  handleSubmit = () => {
    this.props.logoutUser();
    this.props.history.replace("/");
  };
  handleCencel = () => {
    this.props.history.replace("/contacts");
  };
  render() {
    return (
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Подтверждение выхода</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Вы уверены, что хотите выйти?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" type="button" onClick={this.handleCencel}>
            Отмена
          </Button>
          <Button variant="primary" type="button" onClick={this.handleSubmit}>
            Выход
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    );
  }
}

const mapDispatchToProps = {
  logoutUser,
};

export default connect(null, mapDispatchToProps)(LogOut);
