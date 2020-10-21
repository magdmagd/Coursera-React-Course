import React from 'react';
import {Card,CardBody,CardText,CardImg,CardImgOverlay, CardTitle} from 'reactstrap';

     
        
    function RenderDish({dish})
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
            else
            {
                return(
                        <div>

                        </div>
                );
            }
        }//end renderDish(dish) 
        
        
         function RenderComments({dish})
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
            
        }//end big if*/
        else{
            return(
                <div></div>
            )
        }//end else
    }//end  RenderComments

    



    const Dishdetail = (props)=>
    {
      // const dish = props.dish ;       
               
    return (       
    <div  className="container">    
     <div className="row">
        <RenderDish dish={props.dish}/>
        <RenderComments dish={props.dish} />
    </div> 
 </div>      

     );//end return

    }//end DishDetail

/*
<RenderComments dish={props.dish} />
    {RenderDish(dish)}   
        {RenderComments(dish)}
*/
    

 
export default Dishdetail ;


