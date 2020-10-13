    import React ,{Component} from 'react';
    import {Media , Card,CardBody,CardText,CardImg,CardImgOverlay, CardTitle} from 'reactstrap';


    class Menu extends Component 
    {
        constructor(props)    
        {
            super(props);

            console.log('Menu Component constructor is invoked');
        }//end constructor


        state = {   
            selectedDish:null          
        }//end state

        onDishSelect(dish)
        {
            this.setState({selectedDish:dish});
        }

        
        renderDish(dish)
        {
            if(dish !=null)
            {
                
                    return(
                        <div >
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

        }//end renderDish

        componentDidMount()
        {
            console.log('Component DidMount is invoked');
        }//end componentDidMount()

        render() 
        { 
            //const menu = this.state.dishes.map((dish)=>{
                const menu = this.props.dishes.map((dish)=>{
                    return(
                        <div key={dish.id} className="col-12 col-md-5 m-1">
                                <Card onClick={()=>this.onDishSelect(dish)}>
                                    <CardImg width="100%" src={dish.image} alt={dish.name} />                                        
                                    <CardImgOverlay body className="ml-5">
                                            <CardTitle>{dish.name}</CardTitle>                                            
                                    </CardImgOverlay>
                                </Card>
                        </div>
                    );
            });

            console.log('Menu Component Render is invoked');
            return (                         
                        <div  className="container">
                            <div className="row">
                                  {menu}
                            </div>

                              
                            <div className="row">
                            {this.renderDish(this.state.selectedDish)}   
                            </div>
                        </div>
                  );
        }//end render
    }//end class
     
    export default Menu;