import React, { Component } from 'react';
import './css/App.css';
import { Container} from 'react-bootstrap';
import AppRouter from './AppRouter.js';
import TopMenu from './menu/TopMenu.js';
import BottomMenu from './menu/BottomMenu.js';

class App extends Component {
  render() {
    return (
      <Container>
       <div className="main-table">   
         <TopMenu />
        
        <AppRouter />
        hello
   
        <BottomMenu />
        </div>    
      </Container>
    );
  }
}

export default App;
