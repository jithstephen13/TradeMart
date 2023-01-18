import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, GridItem } from "@chakra-ui/react";

const ProductDetails = () => {
  const [data, setData] = useState([]);

  const data1 = data.splice(4, 29);

  const getProduct = async () => {
    const product = await axios.get(
      `https://trademart-data-2zur.vercel.app/medicines`
    );
    setData(product.data);
  };
  console.log("Data:", data);

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div style={{ padding: "10px", backgroundColor: "#f9f2eb" }}>
      <div style={{ display: "flex", justifyContext: "space-around" }}>
        {/* Product-Image */}
        <div style={{ width: "30%", textAlign: "center", margin: "auto" }}>
          <img
            src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/ruma122iif8yx1nwhpfe.jpg"
            alt="medicine"
            style={{ borderRadius: "18px", height: "400px", margin: "20px" }}
          />
        </div>

        {/* Product-Details */}
        <div style={{ margin: "auto", padding: "15px", width: "30%" }}>
          <p
            style={{
              fontSize: "20px",
              fontWeight: "700",
              letterSpacing: "1px",
            }}
          >
            Ascoril LS Syrup
          </p>

          <p style={{ color: "blue", fontWeight: "bold" }}>
            {" "}
            ₹ 70<span style={{ fontWeight: "lighter" }}>/Pack</span>{" "}
          </p>

          <div style={{ marginTop: "22px" }}>
            <p>
              <span
                style={{
                  marginRight: "245px",
                  fontWeight: "light",
                }}
              >
                Usage
              </span>{" "}
              Commercial, Hospital
            </p>
            <hr />

            <p>
              <span
                style={{
                  marginRight: "200px",
                  fontWeight: "light",
                }}
              >
                Product Type
              </span>{" "}
              Finished Product
            </p>
            <hr />

            <p>
              <span
                style={{
                  marginRight: "100px",
                  fontWeight: "light",
                }}
              >
                Dosage Form (If Applicable)
              </span>{" "}
              Syrup
            </p>
            <hr />

            <p>
              <span
                style={{
                  marginRight: "200px",
                  fontWeight: "light",
                }}
              >
                Company
              </span>{" "}
              Alembic Pharmaceuticals Ltd
            </p>
            <hr />
          </div>

          <p style={{ margin: "20px" }}>
            We offers Bronchodilator & Expectorant Syrup.
          </p>

          <button
            style={{
              marginLeft: "50px",
              width: "250px",
              padding: "20px",
              color: "white",
              fontWeight: "bold",
              backgroundColor: "#25766a",
              borderRadius: "10px",
              fontSize: "17px",
            }}
          >
            Add to Cart
          </button>
        </div>

        {/* Retailer Details */}
        <div style={{ margin: "auto", padding: "15px", width: "30%" }}>
          
        </div>
      </div>

      {/* Browse Related categories */}
      <div style={{ marginBottom: "25px" }}>
        <p
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            textAlign: "center",
            margin: "15px",
          }}
        >
          Browse related categories
        </p>
        <Grid
          templateColumns="repeat(4, 1fr)"
          gap="6"
          textAlign="center"
          margin="10px"
        >
          {data.map((el, id) => (
            <GridItem>
              <img
                src={el.img_src}
                alt="img"
                style={{
                  borderRadius: "20px",
                  backgroundColor: "white",
                }}
              />
              <p>
                <b>{el.name}</b>
              </p>
              <p>
                <b>{el.price}</b>
              </p>
              <p>
                <b>{el.company}</b>
              </p>
            </GridItem>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default ProductDetails;
