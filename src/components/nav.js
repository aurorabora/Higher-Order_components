import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ChangeAuth } from '../actions';


class Nav extends Component{
    renderLinks(){
        const { auth, changeAuth } = this.props;


    if(auth){    
        return (
                
                       <Fragment>
                       <li>
                            <Link to="/"> Home</Link>
                        </li>
                        <li>
                            <Link to="/about"> About</Link>
                        </li>
                        <li>
                            <Link to="/secret-doc">Secret Doc</Link>
                        </li>
                        <li>
                            <Link to="/sign_out"> Sign Out</Link>
                        </li>
                       </Fragment>               
        );
    }

    return(
        <Fragment>
            <li>
                <Link to="/sign-in">Sign In</Link>
            </li>
            <li>
                <Link to="/sign-up">Sign Up</Link>
            </li>
        </Fragment>
        );
    }
}

export default Nav;