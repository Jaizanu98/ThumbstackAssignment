import logo from './logo.svg';
import './App.css';
import Player from './components/videoplayer';
import Option from './components/options';
import Notification from './components/notification';
import { AppBar, Typography } from '@material-ui/core';

function App() {
  return (
    <div >
      <AppBar  style={{background:'#02570a'}} position="static" color="inherit">
        <Typography style={{color:'white'}} variant="h2" align="center">Hello!</Typography>
      </AppBar>
      <Player />
      <Option>
      <Notification />
      </Option>
      

    </div>
  );
}

export default App;
