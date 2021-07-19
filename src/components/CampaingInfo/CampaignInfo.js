import React from "react";
import "./CampaignInfo.css";
import { useContext } from "react";
import { ProductContext } from "../ProductContext/Product.Context";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const CampaignInfo = () => {
  const { id } = useParams();
  const [products] = useContext(ProductContext);

  const product = products.filter((item) => {
    return item.id == id;
  });

  const { name, keyword, bidAmount, campaignFound, status, town, radius } =
    product[0];
  console.log();
  return (
    <div className="container m-5 mx-auto">
      <h1>{name} details</h1>
      <table className="table">
        <tbody>
          <tr>
            <th>Keywords</th>
            <td>
              {keyword.map((item, index) => (
                <span key={index}>{item}, </span>
              ))}
            </td>
          </tr>
          <tr>
            <th>Bid Amount($):</th>
            <td>{bidAmount}</td>
          </tr>
          <tr>
            <th>Campaign Found ($)</th>
            <td>{campaignFound}</td>
          </tr>
          <tr>
            <th>Status (on/off)</th>
            <td>{status}</td>
          </tr>
          <tr>
            <th>Town</th>
            <td>{town === "" ? "No town specified" : town}</td>
          </tr>
          <tr>
            <th>Radius (km)</th>
            <td>{radius}</td>
          </tr>
        </tbody>
      </table>

      <div className="col-4 mx-auto d-flex justify-content-center">
        <Link to="/">
          <Button className="w-100 mt-3" variant="dark" type="submit">
            Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CampaignInfo;
