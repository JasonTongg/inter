import React from "react";
import { Container } from "./Style.js";
import { useNavigate } from "react-router";

export default function ProductItem({ data }) {
  let navigate = useNavigate();
  let clickHandler = () => {
    navigate(`/detail/${data.productId}`);
  };

  return (
    <Container onClick={clickHandler}>
      <img src={data.logoUrls[0]} alt="" />
      <h2>{data.productName}</h2>
    </Container>
  );
}
