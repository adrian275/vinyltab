import React, { Component } from "react";
import {
    Button,
    Card,
    CardTitle,
    CardImg,
    CardBody, 
    CardText, 
    Table
  } from 'reactstrap';
  import { BarChart, PieChart} from 'react-chartkick';
  import 'chart.js';

  function RenderAlbums(props) {
    if (props.albums) {
        return (
        <div className="col-md-5">
        <h4 className="display-4">Vinyl Collection</h4>
        <div>
         <Table striped bordered hover>
            <thead>
                <tr>
                  <th>Id</th>
                  <th>Artist</th>
                  <th>Album</th>
                  <th>Album Year</th>
                </tr>
            </thead>
            <tbody>
            {props.albums.map(album => <tr><td>{album.id}</td><td>{album.artist}</td><td>{album.name}</td><td>{album.year}</td></tr>)};
            </tbody>
          </Table>
          </div>
          </div>
        )}
       return <div />
}

  class MyAlbums extends Component {
      render() {
          return(
            <div>
              <div className="container mb-5 mt-5">
              <h4 className="display-4 mb-5">Collection Summary</h4>
                  <div className="row">
                      <div className="col-md-11 kpi m-auto">
                          <div className="row">
                          <div className="col mt-4">
                              <h3 className="display-4 mt-2">
                              Total Albums
                          </h3>
                          <h2 className="display-3">45</h2>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col graph m-auto ">
                          <div className="row d-flex p-5">
                          <div className="col-xs-4 col-lg-10 graph-body mx-auto"><h4 className="mt-2 text-black">Vinyls by Genre</h4>
                          <PieChart colors={["#4AB19D"]} data={{"Rock": 44, "Soul": 23}} />
                          </div>
                          <div className="col-xs-4 col-lg-10 graph-body mx-auto"><h4 className="mt-2 text-black">Top Artist</h4>
                          <BarChart colors={["475C7A"]} data={{"David Bowie": 44, "Led Zeppelin": 23}} />
                          </div>
                          </div>
                      </div>
                  </div> 
                  
                  <div className="row mt-5">
                    <div className="col">
                      <h5 className="display-4">Album List</h5>
                    </div>
                  </div>
                  <div className="row mt-5">
                  
                  <div className="col"> 
                    <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>Id</th>
                            <th>Arist Name</th>
                            <th>Album Name</th>
                            <th>Album Year</th>
                            <th>Genre</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Andrew Bird</td>
                            <td>My Best Work Yet</td>
                            <td>2019</td>
                            <td>Indie Folk Rock</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Bill Withers</td>
                            <td>Live At Carnegie Hall</td>
                            <td>1973</td>
                            <td>Soul</td>
                          </tr>
                          <tr>
                          <td>3</td>
                            <td>Led Zeppelin</td>
                            <td>Led Zeppelin 3</td>
                            <td>1970</td>
                            <td>Soul</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
              </div>          
            </div>
          );
      };
  }

  export default MyAlbums;