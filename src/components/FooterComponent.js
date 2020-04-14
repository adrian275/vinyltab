import React, { Component } from "react";
import {
    Navbar,
    Nav, 
    NavbarToggler,
    NavItem,
    NavLink,
    Collapse,
    NavbarBrand
  } from 'reactstrap';

class Footer extends Component {
    
    render() {
        return(
            <div className="container">
            <div className="row">
            <div className="col">
            <Navbar className="bg-dark text-light">
            <NavbarBrand className="mr-auto" href="/"><img src="/assets/images/Vinyl@2x.svg" height="30" width="30" alt="VinylLogo" /></NavbarBrand>
                Vinyltab
            </Navbar>
          </div>
          </div>
          </div>
        );
    };

}




export default Footer;