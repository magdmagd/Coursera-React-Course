import React , {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
//import DishDetail from './DishdetailComponent';
//import Menu from '../Functional/MenuComponent';
import DishDetail from '../Functional/DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from '../Functional/HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
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

    const HomePage = () => {
      return(
          <Home />
      );
    }//end Home Page 

    return ( 
      <div className="App">      
        <Header/>                  
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes}
                                        onClick={(dishId)=>this.onDishSelect(dishId)}/>} />
              <Redirect to="/home" />
          </Switch>
      <Footer/>
     </div>
     );
  }//end render
}//end class
 // Update Dish Detail Component 
 //<DishDetail />
 //      <DishDetail dish={this.state.dishes.filter((dish)=>dish.id===this.selectedDish)[0]}/>
 
 /**
  * <Navbar dark color="primary">    // Update View 
        <div className="container">
          <NavbarBrand href="/">Ristorante Confusion</NavbarBrand>
        </div>
       </Navbar>
  */

  /**
   * Update Route Process
   *    <Menu dishes={this.state.dishes}
         onClick={(dishId)=>this.onDishSelect(dishId)}/>
      <DishDetail dish={this.state.selectedDish}/>
   * 
   */
export default MainComponent;

