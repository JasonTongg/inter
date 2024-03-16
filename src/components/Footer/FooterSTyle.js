import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  padding: 2rem;
  padding-bottom: 0rem;
  width: 100vw;

  .copyRight {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    padding: 0.5rem;

    p {
      color: white;
      font-size: 1.2rem;

      span {
        color: orange;
      }
    }
  }

  .navigation {
    display: flex;
    align-item: center;
    justify-content: center;
    gap: 1rem;
    margin-block: 2rem 1rem;

    a {
      color: white;
      text-decoration: none;
      font-size: 1.4rem;

      &:hover {
        color: orange;
      }
    }
  }

  .socialMedia {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    .socialMediaItem {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: white;
      cursor: pointer;

      svg {
        font-size: 1.5rem;
      }
    }
  }
`;
