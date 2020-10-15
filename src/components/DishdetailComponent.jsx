import React, { Component } from 'react';
import {Card,CardBody,CardText,CardImg,CardImgOverlay, CardTitle} from 'reactstrap';


class DishdetailComponent  extends Component 
{

    constructor(props)
    {
        super(props);
        
    }//end constructor

    
    state = 
    {  
               selectedDish:null
    }//end state 

    
    
    renderDish(dish)
        {
            if(dish !=null)
            {            
                    return(
                        <div key={dish.id} className="col-12 col-md-5 m-1">
                                <Card>
                                    <CardImg width="100%" src={dish.image} alt={dish.name} />                                        
                                    <CardBody body className="ml-5">
                                            <CardTitle heading>{dish.name}</CardTitle> 
                                            <CardText>{dish.description}</CardText>                                           
                                    </CardBody>
                                </Card>
                        </div>
                    );               
                
             
            
            }//end if   

        }//end renderDish(dish)       

    render() 
    { 
          
       const dish = this.props.dish ; 
               
    return (       
        
    <div className="row">
        {this.renderDish(dish)}   
    </div>

     );

    }//end render
}//end class
 
export default DishdetailComponent ;


