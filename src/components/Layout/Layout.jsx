import { Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, HeaderWrapper, Header, Nav, Link } from './Layout.styled';
import Loader from 'components/Loader';
import { ThemeProvider } from 'styled-components';
import { light, dark } from 'components/Theme/Theme.styled';
import { GlobalStyles } from 'components/Theme/Global';
import { SwitchThemeBtn } from 'components/Theme/SwitchThemeBtn';

const Layout = () => {
  const [theme, setTheme] = useState(() => {
    return JSON.parse(window.localStorage.getItem('theme')) ?? light;
  });

  const setThemeLight = () => {
    setTheme(light);
  };

  const setThemeDark = () => {
    setTheme(dark);
  };

  useEffect(() => {
    window.localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header>
        <Container>
          <HeaderWrapper>
            <Nav>
              <Link to="/">Home</Link>
              <Link to="/movies">Movies</Link>
            </Nav>
            <SwitchThemeBtn
              themeName={theme.name}
              setThemeLight={setThemeLight}
              setThemeDark={setThemeDark}
            />
          </HeaderWrapper>
        </Container>
      </Header>
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <ToastContainer autoClose={2000} position="bottom-right" />
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
