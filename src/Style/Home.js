import styled from "styled-components";

export const BigContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow-x: hidden;

  .productList {
    width: 100vw;
    padding-inline: 4rem;
    padding-block: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 1rem;

    @media only screen and (max-width: 550px) {
      grid-template-columns: 1fr;
      padding-inline: 1rem;
    }
  }

  .priceContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 1rem;

    div {
      display: flex;
      gap: 1rem;
      align-items: center;
      font-size: 1.2rem;

      @media only screen and (max-width: 700px) {
        flex-direction: column;
        gap: 0.5rem;
      }

      input {
        border: 1px solid black;
        border-radius: 5px;
        padding: 0.5rem 0.8rem;
        font-size: 1.2rem;
      }
    }
  }

  .filterContainer {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    width: 500px;
    gap: 1rem;

    @media only screen and (max-width: 550px) {
      grid-template-columns: 1fr;
      gap: 0.5rem;
      width: 100%;
      padding-inline: 1rem;
    }

    button {
      cursor: pointer;
      border-radius: 5px;
      border: 1px solid black;
      padding: 0.5rem 0.8rem;
      background-color: transparent;
      font-size: 1.3rem;
    }
  }

  h1 {
    font-size: 3rem;
  }
`;

export const SearchBarContainer = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  .searchBar {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border: 1px solid black;
    padding: 0.5rem 0.8rem;
    border-radius: 10px;

    input {
      padding: 0.5rem 0.8rem;
      border: none;
      outline: none;
      width: 500px;
      font-size: 1.2rem;

      @media only screen and (max-width: 600px) {
        width: 100%;
      }
    }

    svg {
      font-size: 1.3rem;
      cursor: pointer;
    }
  }
`;
