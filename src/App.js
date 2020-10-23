import React , {Component} from 'react';
//import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
import MainComp from './components/MainComponent';

class App extends Component {
  

  render() 
  { 
    return ( 
          <div>
             <MainComp />
          </div>
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

