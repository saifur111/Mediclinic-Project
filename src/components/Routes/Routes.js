import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from '../../Contexts/AuthProvider';
// import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Header from '../Header/Header';
import Login from '../login/Login';
import Register from '../register/Register';
import Profile from '../profile/Profile';
import Home from '../home/Home';
import Work from '../work/Work';


const Routes = () => {
    return (
        <div className="">
            <AuthProvider>
                <BrowserRouter>
                    <Header></Header>
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/home">
                            <Home/>
                        </Route>
                        <Route path="/login">
                            <Login></Login>
                        </Route>
                        <Route path="/register">
                            <Register></Register>
                        </Route>
                        <Route path="/me">
                            <Profile></Profile>
                        </Route> 
                        <Route path="/apps">
                            <Work></Work>
                        </Route> 
                        {/* <PrivateRoute path="/placeorder">
                        <PlaceOrder></PlaceOrder>
                        </PrivateRoute>*/}
                    </Switch>
                </BrowserRouter>
            </AuthProvider>   
        </div>
    );
};

export default Routes;