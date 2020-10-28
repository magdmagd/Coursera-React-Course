import React , {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
//import Menu from './MenuComponent';
//import DishDetail from './DishdetailComponent';
import Menu from '../Functional/MenuComponent';
import Contact from '../Functional/ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from '../Functional/HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { DISHES } from '../shared/dishes';
import { DISHES2 } from '../shared/dishes2';
import { COMMENTS } from './../shared/comments';
import { PROMOTIONS } from './../shared/promotions';
import { LEADERS } from './../shared/leaders';
import Dishdetail from '../Functional/DishdetailComponent';
class MainComponent extends Component {
  
  state = {  }

  constructor(props)
  {
    super(props);

    this.state= {
      dishes:DISHES,
      dishes2:DISHES2 ,
      comments:COMMENTS ,
      leaders : LEADERS ,
      promotions : PROMOTIONS,
      selectedDish:null
    }
  }//end constructor

  onDishSelect(dishId)
        {
            this.setState({selectedDish:dishId});
        }//end onDishSelect


  render() 
  { 
    const HomePage = () => 
    {
      return(
          <Home 
          dish={this.state.dishes2.filter((dish2) => dish2.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]} />
      );
    }//end Home Page 

    const DishWithId = ({match})=>
     {
      return(

      <Dishdetail  dish={this.state.dishes2.filter((dish2) => match.params.dishId)[0]}
                   comments ={this.state.comments.filter((comment)=>match.params.dishId)}
      />
      );//end return 
     } 

    
    

     return ( 
      <div className="App">      
        <Header/>                  
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes}
                                        onClick={(dishId)=>this.onDishSelect(dishId)}/>} /> 
              <Route path="/menu/:dishId" component={DishWithId}/>                                                     
              <Route exact path='/contactus' component={Contact} />                                        
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
   * //dish={this.state.dishes2.filter((dish2)=>dish2.Id===parseInt(match.params.dishId,10))[10]}
   *///comment.dishId===parseInt(match.params.dishId,10))

   /**
    * 

        
    * 
    */
export default MainComponent;

