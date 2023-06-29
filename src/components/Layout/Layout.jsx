import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, HeaderWrapper, Header, Nav, Link } from './Layout.styled';
import Loader from 'components/Loader';
import { GlobalStyles } from 'components/Theme/Global';
import { SwitchThemeBtn } from 'components/Theme/SwitchThemeBtn';

const Layout = () => {
  return (
    <>
      <GlobalStyles />
      <Header>
        <Container>
          <HeaderWrapper>
            <Nav>
              <Link to="/">Home</Link>
              <Link to="/movies">Movies</Link>
            </Nav>
            <SwitchThemeBtn />
          </HeaderWrapper>
        </Container>
      </Header>
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <ToastContainer autoClose={2000} position="bottom-right" />
      </Container>
    </>
  );
};

export default Layout;
