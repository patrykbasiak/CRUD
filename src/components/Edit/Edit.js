import React from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../ProductContext/Product.Context";
import { useContext, useState } from "react";
import "./Edit.css";
import towns from "../../data/towns";
import keys from "../../data/keys";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Form, Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const [products, setProducts] = useContext(ProductContext);
  const newProduct = products.filter((product) => product.id == id);
  const [name, setName] = useState(newProduct[0].name);
  const [keyword, setKeyword] = useState(newProduct[0].keyword);
  const [bidAmount, setBidAmount] = useState(newProduct[0].bidAmount);
  const [campaignFound, setCampaignFound] = useState(
    newProduct[0].campaignFound
  );
  const [status, setStatus] = useState(newProduct[0].status);
  const [town, setTown] = useState(newProduct[0].town);
  const [radius, setRadius] = useState(newProduct[0].radius);

  const editProduct = (e) => {
    e.preventDefault();
    setProducts([...products]);
  };

  const editName = (e) => {
    setName(e.target.value);
    newProduct[0].name = e.target.value;
  };
  const editKeyword = (selected) => {
    setKeyword(selected);
    newProduct[0].keyword = selected;
  };
  const editBidAmount = (e) => {
    setBidAmount(e.target.value);
    newProduct[0].bidAmount = e.target.value;
  };
  const editCampaignFound = (e) => {
    setCampaignFound(e.target.value);
    newProduct[0].campaignFound = e.target.value;
  };
  const editStatus = (e) => {
    setStatus(e.target.value);
    newProduct[0].status = e.target.value;
  };
  const editTown = (e) => {
    setTown(e.target.value);
    newProduct[0].town = e.target.value;
  };
  const editRadius = (e) => {
    setRadius(e.target.value);
    newProduct[0].radius = e.target.value;
  };
  return (
    <div className="container m-5 w-50 mx-auto">
      <h1 className="text-center my-5">Edit Product Campaign</h1>
      <Form onSubmit={() => editProduct}>
        <Form.Group className="mb-3" controlId="campaignName">
          <Form.Label>Campaign name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={editName}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="keyword">
          <Form.Label>Keywords</Form.Label>

          <Typeahead
            required
            selected={keyword}
            onChange={(selected) => {
              editKeyword(selected);
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
            onChange={editBidAmount}
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
            onChange={editCampaignFound}
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
            onChange={editRadius}
          />
        </Form.Group>
        <div className="row">
          <div className="col-sm-6 d-flex justify-content-center">
            <select
              required
              className="m-2 w-75 drop"
              value={status}
              onChange={editStatus}
            >
              <option value="">Status</option>
              <option value="on">on</option>
              <option value="off">off</option>
            </select>
          </div>

          <div className="col-sm-6 d-flex justify-content-center">
            <select className="m-2 w-75 drop" value={town} onChange={editTown}>
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
        <Link to="/">
          <Button type="submit" className="w-100 mt-3" variant="dark">
            Edit
          </Button>
          <Button className="w-100 mt-3" variant="dark" type="submit">
            Home
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Edit;
