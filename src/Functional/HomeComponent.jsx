import React from 'react';
import { Card,CardBody,CardText,CardImg,CardImgOverlay, CardTitle, CardSubtitle} from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';
import { promosLoading } from './../redux/ActionCreators';
import { FadeTransform } from 'react-animation-components';

function RenderCard({item , isLoading, errMess})
{

  if (isLoading) {
    return(
            <Loading />
       );
    }
      else if (errMess) {
        return(
            <h4>{errMess}</h4>
        );
}
else 
{
  return(

    <FadeTransform
    in
    transformProps={{
        exitTransform: 'scale(0.5) translateY(-50%)'
    }}>
    <Card >
    <CardImg width="100%" src={baseUrl+item.image} alt={item.name} />                                        
    <CardBody body className="ml-5">
           <CardTitle>{item.name}</CardTitle> 
              {item.description ? <CardSubtitle>{item.designation}</CardSubtitle>:null} 
           <CardText>{item.description}</CardText>                                          
   </CardBody>
  </Card>
  </FadeTransform>
  );
 }//end else
}//end RenderCard()

function Home(props)
{

    return(
        <div className="container">
          <div className="row align-item-start">
            <div className="col-12 col-md m-1">
                <RenderCard item={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess}/>
            </div>
            <div className="col-12 col-md m-1">
            <RenderCard item={props.promotion} isLoading={props.promoLoading} errMess={props.promoErrMess} />
            </div>
            <div className="col-12 col-md m-1">
                <RenderCard item={props.leader} isLoading={props.leadersLoading} errMess={props.leadersErrMess}/>
            </div>
          </div>
         
        </div>
      );

}//end function

export default Home ;

// <h4>Home</h4>