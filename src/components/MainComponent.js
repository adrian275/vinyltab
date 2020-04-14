import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import MyAlbums from './MyAlbumsComponent';
import { connect } from 'react-redux';
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

const mapStateToProps = state => {
    return {
        myalbums: state.myalbums
    };
};

class Main extends Component {
    render() {
        const HomePage = () => {
            return (
                <Home />
                
            );
        }

        return (
            <div>
               <Header />
                    <Switch>
                        <Route path='/home' component={HomePage} />
                        <Route exact path='/myalbums' render={() => <MyAlbums albums={this.props.albums} />} />
                        <Redirect to='/home'></Redirect>      
                    </Switch>
               <Footer />
            </div>
        );
    };
}

export default withRouter(connect(mapStateToProps)(Main));