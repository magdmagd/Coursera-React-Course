import React , {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent'
import { DISHES } from '../shared/dishes';

class MainComponent extends Component {
  
  state = {  }

  constructor(props)
  {
    super(props);

    this.state= {
      dishes:DISHES,
      selectedDish:null
    }
  }//end constructor

  onDishSelect(dishId)
        {
            this.setState({selectedDish:dishId});
        }//end onDishSelect


  render() 
  { 
    return ( 
      <div className="App">      
        <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Confusion</NavbarBrand>
        </div>
       </Navbar>
       <Menu dishes={this.state.dishes}
         onClick={(dishId)=>this.onDishSelect(dishId)}/>
      
     </div>
     );
  }//end render
}//end class <DishDetail dish={this.state.dishes.filter((dish)=>dish.id===this.selectedDish)[0]}/>
 
export default MainComponent;

