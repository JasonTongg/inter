import { createContext, useEffect, useState } from "react";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import ProductItem from "../components/ProductItem/ProductItem";
import { SearchBarContainer, BigContainer } from "../Style/Home.js";
import { FaSearch } from "react-icons/fa";

export const userContext = createContext();

export default function Home() {
  let [data, setData] = useState([]);
  let [filterData, setFilterData] = useState([]);
  let [from, setFrom] = useState(0);
  let [to, setTo] = useState(10000000);

  let token =
    "eyJraWQiOiJjNGE1ZWU1Zi0xYmE2LTQ1N2UtOTI3Yi1lYzdiODliNzcxZTIiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyMjA3MiIsImlzcyI6Imh0dHBzOi8vcmVsb2FkbHktc2FuZGJveC5hdXRoMC5jb20vIiwiaHR0cHM6Ly9yZWxvYWRseS5jb20vc2FuZGJveCI6dHJ1ZSwiaHR0cHM6Ly9yZWxvYWRseS5jb20vcHJlcGFpZFVzZXJJZCI6IjIyMDcyIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIiwiYXVkIjoiaHR0cHM6Ly9naWZ0Y2FyZHMtc2FuZGJveC5yZWxvYWRseS5jb20iLCJuYmYiOjE3MTA1NTkxNDQsImF6cCI6IjIyMDcyIiwic2NvcGUiOiJkZXZlbG9wZXIiLCJleHAiOjE3MTA2NDU1NDQsImh0dHBzOi8vcmVsb2FkbHkuY29tL2p0aSI6ImFjODliMGRjLTkxZDYtNGE4Ni1hNTRhLTE3ZDE4NWIyMTk0YiIsImlhdCI6MTcxMDU1OTE0NCwianRpIjoiY2U0NjZmYmMtNjQwNC00ZWJiLTlkNWEtMDdiMTJhMjcwMzQyIn0.9299zL8psrLczpLXrI2EXVvJdg40201sqK9vUiQ3e7I";

  // curl --request GET \
  // --url 'https://giftcards-sandbox.reloadly.com/products?size=&page=&productName=&countryCode=&includeRange=true&includeFixed=true' \
  // --header 'Accept: application/com.reloadly.giftcards-v1+json' \
  // --header 'Authorization: Bearer eyJraWQiOiJjNGE1ZWU1Zi0xYmE2LTQ1N2UtOTI3Yi1lYzdiODliNzcxZTIiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyMjA3MiIsImlzcyI6Imh0dHBzOi8vcmVsb2FkbHktc2FuZGJveC5hdXRoMC5jb20vIiwiaHR0cHM6Ly9yZWxvYWRseS5jb20vc2FuZGJveCI6dHJ1ZSwiaHR0cHM6Ly9yZWxvYWRseS5jb20vcHJlcGFpZFVzZXJJZCI6IjIyMDcyIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIiwiYXVkIjoiaHR0cHM6Ly9naWZ0Y2FyZHMtc2FuZGJveC5yZWxvYWRseS5jb20iLCJuYmYiOjE3MTA1NTkxNDQsImF6cCI6IjIyMDcyIiwic2NvcGUiOiJkZXZlbG9wZXIiLCJleHAiOjE3MTA2NDU1NDQsImh0dHBzOi8vcmVsb2FkbHkuY29tL2p0aSI6ImFjODliMGRjLTkxZDYtNGE4Ni1hNTRhLTE3ZDE4NWIyMTk0YiIsImlhdCI6MTcxMDU1OTE0NCwianRpIjoiY2U0NjZmYmMtNjQwNC00ZWJiLTlkNWEtMDdiMTJhMjcwMzQyIn0.9299zL8psrLczpLXrI2EXVvJdg40201sqK9vUiQ3e7I'

  let callApi = async () => {
    let rawData = await fetch(
      "https://giftcards-sandbox.reloadly.com/products?size=&page=&productName=&countryCode=&includeRange=true&includeFixed=true",
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

    setData(data.content);
    setFilterData(data.content.filter((_, index) => index < 20));
    console.log(data);
  };

  useEffect(() => {
    callApi();
  }, []);

  let sortBrand = () => {
    setFilterData(
      data.sort((a, b) => b.brand.brandName.localeCompare(a.brand.brandName))
    );
  };

  let sortName = () => {
    setFilterData(
      data.sort((a, b) => a.productName.localeCompare(b.productName))
    );
  };

  let changeHandler = (e) => {
    let value = e.target.value;
    setFilterData(data.filter((item) => item.productName.startsWith(value)));
  };

  let changePriceFrom = (e) => {
    let value = e.target.value;
    setFrom(value);

    setFilterData(
      data.filter((item) => item.senderFee >= value && item.senderFee <= to)
    );

    console.log(
      data.filter((item) => item.senderFee >= value && item.senderFee <= to)
    );
  };
  let changePriceTo = (e) => {
    let value = e.target.value;
    setTo(value);

    setFilterData(
      data.filter((item) => item.senderFee >= from && item.senderFee <= value)
    );
    // console.log(newData);
  };

  // kecil ke besar
  //   fruits.sort((a, b) => a.qty - b.qty);
  // besar ke kecil
  //   fruits.sort((a, b) => b.qty - a.qty);
  // kecil ke besar
  //   fruits.sort((a, b) => a.name.localeCompare(b.name));
  // besar ke kecil
  //   fruits.sort((a, b) => b.name.localeCompare(a.name));

  return (
    <BigContainer>
      <Navigation></Navigation>
      <SearchBarContainer>
        <div className="searchBar">
          <input type="text" onChange={(e) => changeHandler(e)} />
          <FaSearch />
        </div>
      </SearchBarContainer>

      <div className="priceContainer">
        <p>Price Range</p>
        <div>
          from
          <input
            type="number"
            onChange={(e) => changePriceFrom(e)}
            value={from}
          />
          to
          <input type="number" onChange={(e) => changePriceTo(e)} value={to} />
        </div>
      </div>
      <div className="categoryContainer"></div>
      <div className="filterContainer">
        <button onClick={sortBrand}>Sort By Brand Name</button>
        <button onClick={sortName}>Sort By Product Name</button>
      </div>

      {data.length > 0 ? (
        <>
          {/* <pre>{data}</pre> */}
          <h1>Gift Card</h1>
          <div className="productList">
            {filterData.map((item, index) => {
              return <ProductItem data={item} key={index}></ProductItem>;
            })}
          </div>
          {/* {console.log("update")} */}
        </>
      ) : (
        "Loading..."
      )}

      <Footer></Footer>
      {/* <userContext.Provider value={tes}>
        <Childs isLogin={false} fruits={fruits}></Childs>
      </userContext.Provider> */}
    </BigContainer>
  );
}
