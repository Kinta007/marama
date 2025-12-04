import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { theme } from './styles/theme';
import { ConfigProvider } from 'antd';
import koKR from 'antd/locale/ko_KR';
import styled from 'styled-components';
import Layout from './components/common/Layout';
import Home from './pages/Home';

const AppContainer = styled.div`
  max-width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <ConfigProvider locale={koKR} theme={{
      token: {
        colorPrimary: theme.colors.primary,
        fontFamily: 'Pretendard',
      }
    }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppContainer>
          <Layout>
            <Home />
          </Layout>
        </AppContainer>
      </ThemeProvider>
    </ConfigProvider>
  );
}

export default App;
