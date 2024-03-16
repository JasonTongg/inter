import styled from "styled-components";

export const Header = styled.header`
  width: 100vw;
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 1rem 2rem;
  background-color: black;

  @media only screen and (max-width: 700px) {
    justify-content: center;
  }

  img {
    width: 150px;
  }
`;
export const NavLeft = styled.div`
  wimg {
    cursor: pointer;
  }
`;
export const NavRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media only screen and (max-width: 700px) {
    display: none;
  }

  & > * {
    color: white;
  }

  a {
    text-decoration: none;
    font-size: 1.4rem;
    padding: 1rem;
    transition: all 1s ease-out;

    &:hover {
      background-color: orange;
    }
  }
`;
