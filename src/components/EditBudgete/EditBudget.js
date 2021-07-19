import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../ProductContext/Product.Context";
import { Button, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./EditBudgete.css";

const EditBudgete = () => {
  const { id } = useParams();
  const [products, setProducts, budgete, setBudgete] =
    useContext(ProductContext);

  return (
    <div>
      <div className="modal-box">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Edit Budgete</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Group className="mb-3" controlId="editBudgete">
              <Form.Label>Set New Budgete ($)</Form.Label>
              <Form.Control
                required
                min="0"
                type="number"
                placeholder="Enter amount"
                value={budgete}
                onChange={(event) => setBudgete(event.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Link to="/">
              <Button variant="secondary" className="m-1">
                Save
              </Button>
            </Link>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </div>
  );
};

export default EditBudgete;
