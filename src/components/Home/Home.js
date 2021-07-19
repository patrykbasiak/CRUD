import React from "react";
import { useContext, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ProductContext } from "../ProductContext/Product.Context";
import "./Home.css";

const Home = () => {
  const [products, setProducts, budgete, setBudgete] =
    useContext(ProductContext);

  const resources = products.reduce(
    (total, prod) => total - prod.campaignFound,
    budgete
  );

  return (
    <div className="container  m-5 mx-auto">
      <h1>Product Campaigns</h1>
      <Table striped bordered hover variant="dark" className="data-table">
        <thead>
          <tr>
            <th>Index</th>
            <th>Name</th>

            <th>Status</th>

            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{product.name}</td>

                <td>{product.status}</td>

                <td>
                  <Link to={"/info/" + product.id}>
                    <Button size="sm" variant="info" className="operation_btn">
                      Info
                    </Button>
                  </Link>
                  <Link to={"/edit/"+product.id}>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="operation_btn"
                    >
                      Edit
                    </Button>
                  </Link>

                  <Link to={"/remove/" + product.id}>
                    <Button
                      size="sm"
                      variant="danger"
                      className="operation_btn"
                    >
                      Remove
                    </Button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <Link to="/create">
            <Button variant="dark" className="mt-3 justifty-content-right">
              Add Campaign
            </Button>
          </Link>
        </div>
        <div className="col-12 d-flex justify-content-center mt-4">
          <div className="row"></div>
          <p className="budgete">
            Remaining Budgete: <span>{resources}</span> $
          </p>
        </div>
        <div className=" d-flex justify-content-center">
          <Link to={"/editbudgete/"}>
            <Button variant="dark" className=" justifty-content-center">
              Edit Budgete
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
