import React from 'react';
import { Card,CardBody,CardText,CardImg,CardImgOverlay, CardTitle, CardSubtitle} from 'reactstrap';

function RenderCard({item})
{
  return(

    <Card >
    <CardImg width="100%" src={item.image} alt={item.name} />                                        
    <CardBody body className="ml-5">
           <CardTitle>{item.name}</CardTitle> 
              {item.description ? <CardSubtitle>{item.designation}</CardSubtitle>:null} 
           <CardText>{item.description}</CardText>                                          
   </CardBody>
  </Card>

  );

}//end RenderCard()

function Home(props)
{

    return(
        <div className="container">
          <div className="row align-item-start">
            <div className="col-12 col-md m-1">
                <RenderCard item={props.dish}/>
            </div>
            <div className="col-12 col-md m-1">
                <RenderCard item={props.promotion}/>
            </div>
            <div className="col-12 col-md m-1">
                <RenderCard item={props.leader}/>
            </div>
          </div>
         
        </div>
      );

}//end function

export default Home ;

// <h4>Home</h4>