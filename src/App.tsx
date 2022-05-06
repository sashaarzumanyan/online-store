import { Grid } from '@mui/material';
import { Route, Router } from 'react-router-dom';
import LoginModal from './components/LoginModal';
import Header from './layouts/Header';
import Main from './layouts/Main';
import SideBar from './layouts/SideBar';

function App() {
  return (
    <>
      <Header />
      {/* <SideBar /> */}

      <SideBar />

      <Main />

      {/* <LoginModal /> */}
    </>
  );
}

export default App;
