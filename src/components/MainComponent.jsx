import React , {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import { connect } from 'react-redux';
//import Menu from './MenuComponent';
//import DishDetail from './DishdetailComponent';
import Menu from '../Functional/MenuComponent';
//import Contact from '../Functional/ContactComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from '../Functional/HomeComponent';
import Dishdetail from '../Functional/DishdetailComponent';
import About    from '../Functional/AboutComponent';
import { addComment } from '../redux/ActionCreators';
import { Switch, Route, Redirect,withRouter } from 'react-router-dom';
import { DISHES } from '../shared/dishes';
import { DISHES2 } from '../shared/dishes2';
import { COMMENTS } from './../shared/comments';
import { PROMOTIONS } from './../shared/promotions';
import { LEADERS } from './../shared/leaders';


const mapStateToProps = state => 
{
  return {
    dishes: state.dishes,
    dishes2: state.dishes2,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}//end mapStateToProps

const mapDispatchToProps = dispatch => ({
  
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))

});//end mapDispatchToProps



class MainComponent extends Component {
  
  state = {  }

  constructor(props)
  {
    super(props);

    this.state= {
     /* dishes:DISHES,
      dishes2:DISHES2 ,
      comments:COMMENTS ,
      leaders : LEADERS ,
      promotions : PROMOTIONS,*/
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
          /*<Home 
          dish={this.state.dishes2.filter((dish2) => dish2.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]} />*/
          <Home 
          dish={this.props.dishes2.filter((dish2) => dish2.featured)[0]}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]} />
      );
    }//end Home Page 

    const DishWithId = ({match})=>
     {
      return(

     /* <Dishdetail  dish={this.state.dishes2.filter((dish2) => match.params.dishId)[0]}
                   comments ={this.state.comments.filter((comment)=>match.params.dishId)}     />*/
                   <Dishdetail  dish={this.props.dishes2.filter((dish2) => match.params.dishId)[0]}
                   comments ={this.props.comments.filter((comment)=>match.params.dishId)}   
                   addComment={this.props.addComment}  />           
                   
      );//end return 
     } //end DishWithId

    
    

     return ( 
      <div className="App">      
        <Header/>                  
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes}
                                        onClick={(dishId)=>this.onDishSelect(dishId)}/>} /> 
              <Route path="/menu/:dishId" component={DishWithId}/>                                                     
              <Route exact path='/contactus' component={Contact} />                                        
              <Route exact path='/aboutus'  component={ () => <About leaders={this.props.leaders}/>} />
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
    * Update Redux
         <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes}
                                        onClick={(dishId)=>this.onDishSelect(dishId)}/>} /> 
          
        <Route exact path='/aboutus'  component={ () => <About leaders={this.state.leaders}/>} />
        
    * 
    */
//export default MainComponent;
//export default withRouter(connect(mapStateToProps)(MainComponent)); --> Update Redux

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));

