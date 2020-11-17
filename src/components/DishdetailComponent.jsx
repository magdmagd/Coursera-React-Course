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
                    );//end return             
            }//end if   
        }//end renderDish(dish) 
        
        
         /*RenderComments(dish)  --> Update Render Comments 
         {
            // console.log(comments)
        if(dish !=null )                
        {
            let comments = dish.comments ;

            if (comments != null) 
            {
    
                let list = comments.map((comments)=>{
    
                    return(
                        <li key={comments.id} >
                            <div>
                                <p>{comments.comment}</p>
                                <p>--{comments.author},
                                {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}</p>
                            </div>
                        </li>    
                    )//end return 
                })
    
                return(
                        <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            <ul className="list-unstyled">
                                {list}
                            </ul>                            
                        </div>
                )
            }//end if
            else{
                return(
                    <div></div>
                )
            }//end else
        }//end big if
    }//end  RenderComments*/ 


    

    componentDidMount()
        {
            console.log('DishDetailed Component DidMount is invoked');
        }//end componentDidMount()

    componentDidUpdate()    
    {
        console.log('DishDetailed Component DidUpdate is invoked');
    }



    render() 
    { 
          
       const dish = this.props.dish ; 
       
               
    return (       
  <div  className="container">    
    <div className="row">
        {this.renderDish(dish)}   
        {this.RenderComments(dish)}
    </div> 

 </div>   
   

     );

    }//end render

    
}//end class
 
export default DishdetailComponent ;


