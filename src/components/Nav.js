import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function Navigation() {
  return (
    <NavStyled>
      <LinkStyled to="/play">Play</LinkStyled>
      <LinkStyled to="/history">History</LinkStyled>
    </NavStyled>
  );
}
const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 500px;
`;

const LinkStyled = styled(NavLink)`
  background-color: #ddd;
  color: black;
  border: none;
  padding: 4px;
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: 1px solid black;

  &.active {
    background-color: rgb(63, 63, 63);
    color: white;
  }
`;
