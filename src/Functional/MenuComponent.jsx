    import React  from 'react';
    import { Card,CardBody,CardText,CardImg,CardImgOverlay, CardTitle,Breadcrumb,BreadcrumbItem} from 'reactstrap';
    import {Link} from 'react-router-dom';
    import Detail from './DishdetailComponent';
    


           
        
    function RenderMenuItem({dish,onClick})
    {
          return(
             <Card >
               <Link to={`/menu/${dish.id}`} >
               <CardImg width="100%" src={dish.image} alt={dish.name} />                                        
               <CardImgOverlay body className="ml-5">
                      <CardTitle>{dish.name}</CardTitle>                                            
              </CardImgOverlay>
                </Link> 
             </Card>
          );//end return 
    }//end  function RenderMenuItem   

                
         /* function RenderMenuItem({dish,onClick})
          {
                return(
                   <Card onClick={()=>onClick(dish)}>
                     <CardImg width="100%" src={dish.image} alt={dish.name} />                                        
                     <CardImgOverlay body className="ml-5">
                            <CardTitle>{dish.name}</CardTitle>                                            
                    </CardImgOverlay>
                   </Card>
                );//end return 
          }//end  function RenderMenuItem*/



           const Menu =(props)=>
           {
                const menu = props.dishes.map((dish)=>
                {
                    
                    return(
                        <div key={dish.id} className="col-12 col-md-5 m-1">
                               <RenderMenuItem dish={dish} /> 
                        </div>
                     );
                   });
                 
                  return (                         
                          <div  className="container">

                           <div className="row">
                                 
                                  <Breadcrumb>
                                          <BreadcrumbItem><Link to ='/home'> Home  </Link> </BreadcrumbItem>                                           
                                          <BreadcrumbItem active>Menu</BreadcrumbItem>
                                  </Breadcrumb>
                                  <div className="col-12">
                                    <h3>Menu</h3>
                                    <hr/>
                                  </div>
                            </div>      
                             
                            <div className="row">
                                  {menu}
                            </div>  
                                            
                        </div>
                  );
        
            }//end const Menu =(props)

             // <Detail dish={this.state.selectedDish}/>
    export default Menu;

    //  Update Passing parameters  onClick={props.onClick}

    /**
     * <div className="row">
                                  <Breadcrumb>
                                    <BreadcrumbItem>
                                       <Link to='/home' >Home</Link>
                                    </BreadcrumbItem>
                                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                                  </Breadcrumb>
                                  <div className="col-12">
                                          <h3> Menu </h3>                                                                                      
                                  </div>
                            </div>     
     */