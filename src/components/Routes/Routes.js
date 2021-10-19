import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from '../../Contexts/AuthProvider';
// import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Header from '../Header/Header';
import Login from '../login/Login';
import Register from '../register/Register';
import Home from '../home/Home';
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';
import Clinic from '../Clinic/Clinic';
import Clients from '../Clients/Clients';
import About from '../About/About';
import Services from '../Services/Services';
import Doctors from '../Doctors/Dojtors';
import Blog from '../Blog/Blog';
import PrivateRoute from '../PrivateRoute/PrivateRoute';


const Routes = () => {
    return (
        <div className="">
            <BrowserRouter>
                <AuthProvider>
                    <Header></Header>
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/home">
                            <Home/>
                        </Route>
                        <PrivateRoute  path="/doctors">
                            <Doctors/>
                        </PrivateRoute >
                        <PrivateRoute  path="/services">
                            <Services/>
                        </PrivateRoute >
                        <Route path="/blog/:key">
                            <Blog/>
                        </Route>
                        <Route path="/clinic">
                            <Clinic/>
                        </Route>
                        <Route path="/login">
                            <Login></Login>
                        </Route>
                        <Route path="/register">
                            <Register></Register>
                        </Route>
                        <Route path="/aboutus">
                            <About></About>
                        </Route> 
                        <Route path="/clients">
                            <Clients/>
                        </Route> 
                        {/* <PrivateRoute path="/placeorder">
                        <PlaceOrder></PlaceOrder>
                        </PrivateRoute>*/}
                        {/* <PrivateRoute path="/booking/:serviceId">
                            <Booking></Booking>
                        </PrivateRoute> */}
                        <Route path="*">
                            <NotFound></NotFound>
                        </Route>
                    </Switch>
                    <Footer/>
                </AuthProvider>
            </BrowserRouter>
        </div>
    );
};

export default Routes;