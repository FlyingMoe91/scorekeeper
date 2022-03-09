import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function Navigation() {
  return (
    <NavStyled>
      <LinkStyled isDark={true} to="/play">
        Play
      </LinkStyled>
      <LinkStyled isDark={false} to="/history">
        History
      </LinkStyled>
    </NavStyled>
  );
}
const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 500px;
  margin: 10px;
`;

const LinkStyled = styled(NavLink)`
  background-color: ${props => (props.isDark ? 'rgb(63, 63, 63)' : '#ddd')};
  color: ${props => (props.isDark ? 'white' : 'inherit')};
  border: none;
  padding: 4px 12px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
