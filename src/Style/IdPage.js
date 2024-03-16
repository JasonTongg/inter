import styled from "styled-components";

export const BigContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow-x: hidden;

  .productDetail {
    width: 70%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    align-items: center;
    align-content: center;

    @media only screen and (max-width: 900px) {
      grid-template-columns: 1fr;
      padding-block: 1rem;
    }

    & > * {
      width: 100%;
    }

    .productInfo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.8rem;

      @media only screen and (max-width: 900px) {
        align-items: center;
      }

      p {
        font-size: 1.3rem;
        @media only screen and (max-width: 900px) {
          text-align: center;
        }
      }
      img {
        width: 30px;
      }
      button {
        padding: 0.7rem 1rem;
        width: fit-content;
        background-color: transparent;
        border: 1px solid black;
        border-radius: 5px;
        font-size: 1.2rem;
        cursor: pointer;
      }
    }
  }
`;
