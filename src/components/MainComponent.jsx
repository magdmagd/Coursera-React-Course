import React , {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
//import Menu from './MenuComponent';
//import DishDetail from './DishdetailComponent';
import Menu from '../Functional/MenuComponent';
import DishDetail from '../Functional/DishdetailComponent';
import Header from './HeaderComponent';
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
        <Header/>        
       <Menu dishes={this.state.dishes}
         onClick={(dishId)=>this.onDishSelect(dishId)}/>
      <DishDetail dish={this.state.selectedDish}/>
     </div>
     );
  }//end render
}//end class 
 //<DishDetail />
 //      <DishDetail dish={this.state.dishes.filter((dish)=>dish.id===this.selectedDish)[0]}/>
 /**
  * <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Confusion</NavbarBrand>
        </div>
       </Navbar>
  */
export default MainComponent;

