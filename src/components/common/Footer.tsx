import styled from 'styled-components';
import { theme } from '../../styles/theme';

const FooterContainer = styled.footer`
  padding: 40px 20px;
  background-color: ${theme.colors.white};
  text-align: center;
  color: ${theme.colors.textSecondary};
  font-size: 0.875rem;
  margin-top: auto;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Mara Schedule. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
