    import React ,{Component} from 'react';
    import {Media} from 'reactstrap';


    class Menu extends Component 
    {
        constructor(props)    
        {
            super(props);
        }//end constructor


        state = {  
            dishes:[
            {
                id: 0,
                name:'Uthappizza',
                image: 'assets/images/uthappizza.png',
                category: 'mains',
                label:'Hot',
                price:'4.99',
                description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
            },
            {
                id: 1,
                name:'Zucchipakoda',
                image: 'assets/images/zucchipakoda.png',
                category: 'appetizer',
                label:'',
                price:'1.99',
                description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
            }
            ]//end dishes
        }//end state
        render() 
        { 
            const menu = this.state.dishes.map((dish)=>{
                    return(
                        <div key={dish.id} className="col-12 mt-5">
                                <Media tag="li">
                                    <Media left middle >
                                        <Media object src={dish.image} alt={dish.image}/>
                                    </Media>
                                    <Media body className="ml-5">
                                            <Media heading>{dish.name}</Media>
                                            <p>{dish.description}</p>
                                    </Media>
                                </Media>
                        </div>
                    );
            });


            return (                         
                        <div  className="container">
                            <div className="row">
                                <Media list>
                                    {menu}
                                </Media>

                            </div>
                        </div>
                  );
        }//end render
    }//end class
     
    export default Menu;