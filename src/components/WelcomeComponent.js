import React, { Component } from "react";
import {
    Button,
    Card,
    CardTitle,
    CardImg,
    CardBody, 
    CardText
  } from 'reactstrap';

  class Welcome extends Component {
      render() {
          return(
            <div className="container mb-3">
                 <Card>
                     {/* <CardTitle><h4 className="display-4">Welcome to Vinyltab</h4></CardTitle> */}
                    <CardImg variant="top" src="https://images.pexels.com/photos/1021875/pexels-photo-1021875.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"/>

                    <CardBody>
                    <Button type="button" className="btn btn-outline-dark btn-lg mb-3">Get Started</Button>
                    <CardText>
                        Welcome to Vinyltab, where you can start keeping tabs on that record collection.
                    </CardText>
                    </CardBody>
                </Card>
            </div>
          );
      };
  }

  export default Welcome;