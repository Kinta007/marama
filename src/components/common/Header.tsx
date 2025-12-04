import styled from 'styled-components';
import { theme } from '../../styles/theme';

const HeaderContainer = styled.header`
  height: 60px;
  background-color: ${theme.colors.white};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 0 20px;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.primary};
  margin: 0;
  cursor: pointer;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Mara Schedule</Logo>
    </HeaderContainer>
  );
};

export default Header;
