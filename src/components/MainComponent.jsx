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
import { Switch, Route, Redirect,withRouter } from 'react-router-dom';
import { DISHES } from '../shared/dishes';
import { DISHES2 } from '../shared/dishes2';
import { COMMENTS } from './../shared/comments';
import { PROMOTIONS } from './../shared/promotions';
import { LEADERS } from './../shared/leaders';
import { actions } from 'react-redux-form';
import { postComment,addComment, fetchDishes, fetchComments, fetchPromos,fetchLeaders,postFeedback } from '../redux/ActionCreators';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


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
  
  //addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => { dispatch(fetchDishes())} ,
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()) ,
  mapComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  fetchLeaders:()=>{dispatch(fetchLeaders())},
  postFeedback:(values)=>postFeedback(values)
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

  componentDidMount() 
  {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.mapComment();
    this.props.fetchLeaders();
  }//end

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
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
          promoLoading={this.props.promotions.isLoading}
          promoErrMess={this.props.promotions.errMess}
          //leader={this.props.leaders.filter((leader) => leader.featured)[0]} 
          leader={this.props.leaders.leaders.filter(c=>c.featured)[0]}
          leadersLoading={this.props.leaders.isLoading}
          leadersErrMess = {this.props.leaders.errMess}
          />
          
      );
    }//end Home Page 

    const DishWithId = ({match})=>
     {
      return(

     /* <Dishdetail  dish={this.state.dishes2.filter((dish2) => match.params.dishId)[0]}
                   comments ={this.state.comments.filter((comment)=>match.params.dishId)}     />*/
                   <Dishdetail 
                   dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                   isLoading={this.props.dishes.isLoading}
                   errMess={this.props.dishes.errMess}
                   comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
                   commentsErrMess={this.props.comments.errMess}                      
                   postComment={this.props.mapComment} />           
                   
      );//end return 
     } //end DishWithId

    // dish={this.props.dishes2.filter((dish2) => match.params.dishId)[0]}
    //comments ={this.props.comments.comments.filter((comments)=>match.params.dishId)} 
    //addComment={this.props.addComment}
    

     return ( 
      <div className="App">      
        <Header/>  
        
        <TransitionGroup>
            <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>                
         <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes.dishes}
                                        onClick={(dishId)=>this.onDishSelect(dishId)}/>} /> 
              <Route path="/menu/:dishId" component={DishWithId}/>                                                     
              <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm}  postFeedback={this.props.postFeedback} />}/>                                                      
              <Route path='/aboutus' component={()=><About leaders={this.props.leaders.leaders}/>} />
              <Redirect to="/home" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
          
      <Footer/>
     </div>
     );
  }//end render
}//end class
//<Route exact path='/aboutus'  component={ () => <About leaders={this.props.leaders.leaders}/>} />
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

