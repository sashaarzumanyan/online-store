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
      <Grid container>
        <Grid item xs={2}>
          <SideBar />
        </Grid>
        <Grid item xs={10} sx={{mt:"80px", height: "85vh"}} >
          <Main />
        </Grid>
      </Grid>

      {/* <LoginModal /> */}
    </>
  );
}

export default App;
