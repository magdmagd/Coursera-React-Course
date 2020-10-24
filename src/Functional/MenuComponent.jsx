    import React  from 'react';
    import { Card,CardBody,CardText,CardImg,CardImgOverlay, CardTitle} from 'reactstrap';
    
    import Detail from './DishdetailComponent';


    
        

        
               

                
          function RenderMenuItem({dish,onClick})
          {
                return(
                   <Card onClick={()=>onClick(dish)}>
                     <CardImg width="100%" src={dish.image} alt={dish.name} />                                        
                     <CardImgOverlay body className="ml-5">
                            <CardTitle>{dish.name}</CardTitle>                                            
                    </CardImgOverlay>
                   </Card>
                );//end return 
          }//end  function RenderMenuItem

           const Menu =(props)=>
           {
                const menu = props.dishes.map((dish)=>{
                    
                    return(
                        <div key={dish.id} className="col-12 col-md-5 m-1">
                               <RenderMenuItem dish={dish} onClick={props.onClick}/> 
                        </div>
                     );
                   });
                 
                  return (                         
                          <div  className="container">
                            <div className="row">
                                  {menu}
                            </div>  
                                            
                        </div>
                  );
        
            }//end const Menu =(props)

             // <Detail dish={this.state.selectedDish}/>
    export default Menu;