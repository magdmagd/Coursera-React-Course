import React , {Component} from 'react'; 
import {Navbar, NavbarBrand,Jumbotron} from 'reactstrap';


class Header extends Component 
{

render() 
  { 
      return(

       <React.Fragment>
        <Navbar dark color="primary" >
        <div className="container">
          <NavbarBrand href="/">Ristorante Confusion</NavbarBrand>
        </div>
       </Navbar>
       <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Ristorante Confusion</h1>
                            <p>we take inspiration of big appliation can 
                                challenge all delivery applications 
                             </p>
                        </div>

                    </div>

                </div>
       </Jumbotron>
       </React.Fragment>
      );

  }


}//end class


export default Header ;