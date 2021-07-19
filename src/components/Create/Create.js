import React, { useState } from "react";
import "./Create.css";
import { ProductContext } from "../ProductContext/Product.Context";
import { Link, Redirect } from "react-router-dom";
import { useContext } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import keys from "../../data/keys";
import { v4 as uuidv4 } from "uuid";
import "react-bootstrap-typeahead/css/Typeahead.css";
import towns from "../../data/towns";
import { Form, Button } from "react-bootstrap";

const Create = () => {
  const [products, setProducts] = useContext(ProductContext);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [keyword, setKeyword] = useState([]);
  const [bidAmount, setBidAmount] = useState("");
  const [campaignFound, setCampaignFound] = useState("");
  const [status, setStatus] = useState("");
  const [town, setTown] = useState("");
  const [redirectRef, setRedirectRef] = useState(false);
  const [radius, setRadius] = useState("");

  const addProduct = (e) => {
    e.preventDefault();
    setProducts([
      ...products,
      {
        id: uuidv4(),
        name: name,
        keyword: keyword,
        bidAmount: bidAmount,
        campaignFound: campaignFound,
        status: status,
        town: town,
        radius: radius,
      },
    ]);
    setRedirectRef(true);
    console.log(products);
  };

  if (redirectRef) {
    return <Redirect to="/" />;
  }
  return (
    <div className="container m-5 w-50 mx-auto">
      <h1 className="text-center my-5">Create New Product Campaign</h1>
      <Form onSubmit={addProduct}>
        <Form.Group className="mb-3" controlId="campaignName">
          <Form.Label>Campaign name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="keyword">
          <Form.Label>Keywords</Form.Label>

          <Typeahead
            required
            placeholder="Keywords"
            onChange={(selected) => {
              setKeyword(selected);
            }}
            id="basic-typeahead-multiple"
            options={keys}
            multiple
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="bidAmount">
          <Form.Label>Bid Amount ($)</Form.Label>
          <Form.Control
            required
            min="0"
            type="number"
            placeholder="Enter amount"
            value={bidAmount}
            onChange={(event) => setBidAmount(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="campaignFund">
          <Form.Label>Campaign fund ($)</Form.Label>
          <Form.Control
            required
            min="0"
            type="number"
            placeholder="Enter amount"
            value={campaignFound}
            onChange={(event) => setCampaignFound(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="bidAmount">
          <Form.Label>Radius (KM)</Form.Label>
          <Form.Control
            required
            min="0"
            type="number"
            placeholder="Enter radius"
            value={radius}
            onChange={(event) => setRadius(event.target.value)}
          />
        </Form.Group>
        <div className="row">
          <div className="col-sm-6 d-flex justify-content-center">
            <select
              required
              className="m-2 w-75 drop"
              value={status}
              onChange={(event) => setStatus(event.target.value)}
            >
              <option value="">Status</option>
              <option value="on">on</option>
              <option value="off">off</option>
            </select>
          </div>

          <div className="col-sm-6 d-flex justify-content-center">
            <select
              className="m-2 w-75 drop"
              value={town}
              onChange={(event) => setTown(event.target.value)}
            >
              <option value="">Town</option>
              {towns.map((town, index) => {
                return (
                  <option key={index} value={town}>
                    {town}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <Button className="w-100 mt-3" variant="dark" type="submit">
          Submit
        </Button>
        <Link to="/">
          <Button className="w-100 mt-3" variant="dark" type="submit">
            Home
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Create;
