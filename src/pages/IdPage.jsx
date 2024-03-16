import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import { BigContainer } from "../Style/IdPage";
import { useNavigate } from "react-router";

// curl --request GET \
// 	--url https://giftcards-sandbox.reloadly.com/products/ \
// 	--header 'Accept: application/com.reloadly.giftcards-v1+json' \
// 	--header 'Authorization: Bearer eyJraWQiOiJjNGE1ZWU1Zi0xYmE2LTQ1N2UtOTI3Yi1lYzdiODliNzcxZTIiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyMjA3MiIsImlzcyI6Imh0dHBzOi8vcmVsb2FkbHktc2FuZGJveC5hdXRoMC5jb20vIiwiaHR0cHM6Ly9yZWxvYWRseS5jb20vc2FuZGJveCI6dHJ1ZSwiaHR0cHM6Ly9yZWxvYWRseS5jb20vcHJlcGFpZFVzZXJJZCI6IjIyMDcyIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIiwiYXVkIjoiaHR0cHM6Ly9naWZ0Y2FyZHMtc2FuZGJveC5yZWxvYWRseS5jb20iLCJuYmYiOjE3MTA1NTkxNDQsImF6cCI6IjIyMDcyIiwic2NvcGUiOiJkZXZlbG9wZXIiLCJleHAiOjE3MTA2NDU1NDQsImh0dHBzOi8vcmVsb2FkbHkuY29tL2p0aSI6ImFjODliMGRjLTkxZDYtNGE4Ni1hNTRhLTE3ZDE4NWIyMTk0YiIsImlhdCI6MTcxMDU1OTE0NCwianRpIjoiY2U0NjZmYmMtNjQwNC00ZWJiLTlkNWEtMDdiMTJhMjcwMzQyIn0.9299zL8psrLczpLXrI2EXVvJdg40201sqK9vUiQ3e7I'

export default function IdPage() {
  let { id } = useParams();
  let [data, setData] = useState([]);
  let navigate = useNavigate();

  let callApi = async () => {
    let rawData = await fetch(
      `https://giftcards-sandbox.reloadly.com/products/${id}`,
      {
        method: "GET", // Change to POST method
        headers: {
          "Content-Type": "application/json",
          Accept: "application/com.reloadly.giftcards-v1+json",
          Authorization:
            "Bearer eyJraWQiOiJjNGE1ZWU1Zi0xYmE2LTQ1N2UtOTI3Yi1lYzdiODliNzcxZTIiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyMjA3MiIsImlzcyI6Imh0dHBzOi8vcmVsb2FkbHktc2FuZGJveC5hdXRoMC5jb20vIiwiaHR0cHM6Ly9yZWxvYWRseS5jb20vc2FuZGJveCI6dHJ1ZSwiaHR0cHM6Ly9yZWxvYWRseS5jb20vcHJlcGFpZFVzZXJJZCI6IjIyMDcyIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIiwiYXVkIjoiaHR0cHM6Ly9naWZ0Y2FyZHMtc2FuZGJveC5yZWxvYWRseS5jb20iLCJuYmYiOjE3MTA1NTkxNDQsImF6cCI6IjIyMDcyIiwic2NvcGUiOiJkZXZlbG9wZXIiLCJleHAiOjE3MTA2NDU1NDQsImh0dHBzOi8vcmVsb2FkbHkuY29tL2p0aSI6ImFjODliMGRjLTkxZDYtNGE4Ni1hNTRhLTE3ZDE4NWIyMTk0YiIsImlhdCI6MTcxMDU1OTE0NCwianRpIjoiY2U0NjZmYmMtNjQwNC00ZWJiLTlkNWEtMDdiMTJhMjcwMzQyIn0.9299zL8psrLczpLXrI2EXVvJdg40201sqK9vUiQ3e7I",
        },
      }
    );

    let data = await rawData.json();
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    callApi();
  }, []);

  let clickHandler = () => {
    navigate("/");
  };
  return (
    <BigContainer>
      <Navigation></Navigation>
      {data.length <= 0 ? (
        "Loading..."
      ) : (
        <div className="productDetail">
          <img src={data.logoUrls} alt="" />
          <div className="productInfo">
            <p>Product Name: {data.productName}</p>
            <p>Brand Name: {data.brand.brandName}</p>
            <p>
              Country: {data.country.name}{" "}
              <img src={data.country.flagUrl} alt="" />
            </p>
            <p>Discount Persentage: {data.discountPercentage}</p>
            <p>{data.redeemInstruction.concise}</p>
            <button onClick={clickHandler}>Back to Main Page</button>
          </div>
        </div>
      )}
      <Footer></Footer>
    </BigContainer>
  );
}
