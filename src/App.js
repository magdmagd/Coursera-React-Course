import React , {Component} from 'react';
//import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
import MainComp from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';


class App extends Component {
  

  render() 
  { 
    return ( 
        <BrowserRouter>
          <div>
             <MainComp />
          </div>
        </BrowserRouter> 
      );

    }//end Render  
  /*
  state = {  }

  constructor(props)
  {
    super(props);

    this.state= {
      dishes:DISHES
    }
  }//end constructor


  render() 
  { 
    return ( 
      <div className="App">      
        <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Confusion</NavbarBrand>
        </div>
       </Navbar>
       <Menu dishes={this.state.dishes}/>
     </div>
     );
  }//end render
*/
}//end class
 
export default App;

