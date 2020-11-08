import React, { Component } from 'react';
import {Card,CardBody,CardText,CardImg,CardImgOverlay, CardTitle , Breadcrumb,BreadcrumbItem,
                               Button, Modal, ModalHeader, ModalBody, Row, Col, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { addComment } from './../redux/ActionCreators';



        
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
        
        
         /*function RenderComments({dish})
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
            
        }//end big if
        else{
            return(
                <div></div>
            )
        }//end else
    }//end  RenderComments*/



    function RenderComments({comments , dish , addComment})
         {
            
             console.log(comments)          
           

             // if (comments != null) 
               //{
    
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
                               <Stagger in>                                   
                                    {list}
                               </Stagger>     
                            </ul>   
                            <CommentForm dishId={dish} addComment={addComment} />                         
                        </div>
                )
            //}//end if            
       
       /* else{
            return(
                <div></div>
            )
        }//end else*/
    }//end  RenderComments*/

    



    const Dishdetail = (props)=>
    {
      // const dish = props.dish ;       
               
    return (       
    <div  className="container"> 
     <div className="row">
                                 
                         <Breadcrumb>
                                    <BreadcrumbItem><Link to ='/home'> Home  </Link> </BreadcrumbItem>                                           
                                    <BreadcrumbItem><Link to ='/menu'> Menu  </Link> </BreadcrumbItem>
                                    <BreadcrumbItem active> {props.dish.name} </BreadcrumbItem>
                         </Breadcrumb>
                                 <div className="col-12">
                                   <h3>{props.dish.name}</h3>
                                   <h3>{props.comments.comment}</h3>
                                   <hr/>
                                 </div>
       </div>   
     <div className="row">
        <RenderDish dish={props.dish}/>
        <RenderComments comments={props.comments} 
           addComment={props.addComment}  dishId={props.dish.id}  />
    </div> 
 </div>      

     );//end return

    }//end DishDetail

/*
<RenderComments dish={props.dish} />
    {RenderDish(dish)}   
        {RenderComments(dish)}
*/
    //{props.dish.name}
// Update  Update Props 
// <RenderComments dish={props.dish} /> --> Passing parmaters in routes 
 
export default Dishdetail ;


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

export class CommentForm extends Component {

    constructor(props) 
    {
        super(props)

        this.state = 
        {
            isModalOpen: false
        };

        this.toggleModal  = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }//end constructor

    toggleModal() 
    {
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }//end toggleModal() 

    handleSubmit(values) 
    {
        this.toggleModal();
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }//end handleSubmit()


    render() 
    {
        return (
            <div>
              <div>  
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg"> Submit comment</span>
                </Button>
             </div>   

                <div className="row row-content"> 

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}> Submit comment</ModalHeader>

                        <ModalBody>
                            <div className="col-12 col-md-9">
                                <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                                    <Row className="form-group">
                                        <Label htmlFor="rating" md={5}>Rating</Label>
                                        <Col md={10}>
                                            <Control.select model=".rating" id="rating" name="rating" className="form-control" >
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Control.select>
                                        </Col>
                                    </Row>

                                    <Row className="form-group">
                                        <Label htmlFor="author" md={5}>Your name</Label>
                                        <Col md={10}>
                                            <Control.text model=".author" id="author" name="author" placeholder="Author" className="form-control" validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }} />
                                            <Errors className="text-danger" model=".author" show="touched" messages={{ required: 'Required', minLength: 'Must be greater than 3 characters', maxLength: 'Must be 15 charaters or less' }} />
                                        </Col>
                                    </Row>  
                                    <Row className="form-group">
                                        <Label htmlFor="feedback" md={5}>Your feedback</Label>
                                        <Col md={10}>
                                            <Control.textarea model=".comment" id="comment" name="comment" rows="6" className="form-control" validators={{ required }} />
                                            <Errors className="text-danger" model=".comment" show="touched" messages={{ required: 'Required' }} />
                                        </Col>
                                    </Row>

                                    <Button type="submit" value="submit" color="primary"  >
                                        Submit
                                    </Button>

                                </LocalForm>

                                


                            </div>
                         </ModalBody>    

                 </Modal>       

                </div>

          </div>
        );
    }//end render()

}//end class CommentForm

