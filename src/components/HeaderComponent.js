import React, {  Component, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  Modal, ModalHeader, ModalBody, ModalFooter, Label, Col
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { NavLink } from 'react-router-dom';


class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false,
            isNewAlbumOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleNewAlbum = this.toggleNewAlbum.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        }
            toggleNav() {
                this.setState({
                    isNavOpen: !this.state.isNavOpen
                });
            }

            toggleModal() {
                this.setState({
                    isModalOpen: !this.state.isModalOpen
                });
            }

            toggleNewAlbum() {
                this.setState({
                    isNewAlbumOpen: !this.state.isNewAlbumOpen
                });
            }

            handleSubmit(values) {
                console.log('Current state is: ' + JSON.stringify(values));
                alert('Current state is: ' + JSON.stringify(values));
            }


            render() {
                return(

                   
                    
                    <div className="container">
                        <Navbar expand="md bg-dark">
                    <div className="row">
                        <div className="col">
                            
                                <div className="col d-flex inline-flex mt-3">
                                    <h1 className="text-white">Vinyl</h1>
                                    <NavbarBrand className="mr-auto" href="/"><img src="/assets/images/Vinyl@2x.svg" height="30" width="30" alt="VinylLogo" /></NavbarBrand>
                                    <h1 className="text-white">tab</h1>
                                </div>
                            
                        </div>
                    </div>
                    </Navbar>
                        <div className="row">
                            <div className="col">
                            <Navbar dark className="bg-dark" sticky="top" expand="md">
                    <div className="container">
                        <NavbarToggler dark onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/myalbums">
                                        <i className="fa fa-list fa-lg" /> My Albums
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/search">
                                        <i className="fa fa-info fa-lg" /> Wish List
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <span className="navbar-text ml-auto">
                                <Button className="bt btn-outline-light" onClick={this.toggleNewAlbum}>
                                <NavbarBrand className="mr-auto" href="/"><img src="/assets/images/Vinyl@2x.svg" height="30" width="30" alt="Vinyl@2x.svg" /></NavbarBrand>
                                    <i className="fa fa-sign-in fa-lg" /> Add Album
                                </Button>
                            </span>
                        </Collapse>
                    </div>
                    </Navbar>
                            </div>
                        </div>
                        <Modal isOpen={this.state.isNewAlbumOpen} toggle={this.toggleNewAlbum} role="dialog">
                        <NavbarBrand className="mr-auto" href="/"><img src="/assets/images/Vinyl@2x.svg" height="30" width="30" alt="VinylLogo" /></NavbarBrand>
                            <ModalHeader toggle={this.toggleNewAlbum}>
                            <div className="d-flex inline-flex">
                            <NavbarBrand className="mr-auto" href="/"><img src="/assets/images/VinylBlack@2x.svg" height="60" width="60" alt="VinylBlack@2x.svg" /></NavbarBrand>  
                            <h5 className="ml-3 display-4">Add Album</h5>
                            </div>
                            </ModalHeader>
                            <ModalBody>
                            <LocalForm onSubmit={values => this.handleSubmit(values)}>
                                <div className="form-group">
                                    <Label htmlFor="artist" md={4}>Artist</Label>
                                    <Col md={12}>
                                        <Control.text 
                                        model=".artist" 
                                        id="artist" 
                                        name="artist" 
                                        placeholder="Add Artist" 
                                        className="form-control">
                                            
                                        </Control.text>
                                    </Col>
                                </div>
                                <div className="form-group">
                                    <Label htmlFor="artist" md={4}>Album Name</Label>
                                    <Col md={12}>
                                        <Control.text 
                                        model=".album" 
                                        id="album" 
                                        name="album" 
                                        placeholder="Add Album" 
                                        className="form-control">
                                        </Control.text>
                                    </Col>
                                </div>
                                <div className="form-group">
                                    <Label htmlFor="albumYear" md={4}>Album Year</Label>
                                    <Col md={12}>
                                        <Control.text 
                                        model=".albumYear" 
                                        id="albumYear" 
                                        name="albumYear" 
                                        placeholder="Add Album Year" 
                                        className="form-control">
                                        </Control.text>
                                    </Col>
                                </div>
                                <div className="form-group">
                                        <Label htmlFor="genre" md={2}>Genre</Label>
                                        <Col md={12}>
                                            <Control.select model=".genre" name="genre" default="1"
                                                className="form-control" defaultValue="Rock"      
                                            >
                                            <option>Rock</option>
                                            <option>Indie</option>
                                            <option>Hip-Hop</option>
                                            <option>Classic Rock</option>
                                            <option>Pop</option>
                                            </Control.select>
                                        </Col>
                                </div>
                                <div className="form-group mt-2">
                                <Col>
                                    <Button type="submit" color="dark" >
                                        Submit
                                    </Button>
                                </Col>
                            </div>  
                            </LocalForm>
                            </ModalBody>
                        </Modal>
             </div>
                );
            };

    }

export default Header;