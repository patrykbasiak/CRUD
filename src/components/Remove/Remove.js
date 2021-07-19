import React from "react";
import { useParams } from "react-router-dom";
import "./Remove.css";
import { useContext } from "react";
import { ProductContext } from "../ProductContext/Product.Context";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const Remove = () => {
  const { id } = useParams();
  const [products, setProducts] = useContext(ProductContext);

  const remove = (id) => {
    const newProducts = products.filter((product) => product.id != id);
    setProducts([...newProducts]);
  };
  return (
    <div>
      <div className="modal-box">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Confirm Delete</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>
              Do you really want to delete these record? This process cannot be
              undone.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Link to="/">
              <Button variant="secondary" className="m-1">
                Cancle
              </Button>
              <Button
                variant="danger"
                className="m-1"
                onClick={() => remove(id)}
              >
                Remove
              </Button>
            </Link>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </div>
  );
};

export default Remove;
