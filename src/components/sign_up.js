import React, { Component } from 'react';
import {reduxForm, Field } from 'redux-form';


class SignUp extends Component{
    render(){

        return(
            <h1>Sign up</h1>
        )
    }
}

SignUp = reduxForm({
    form:'sign-up'
})(SignUp);


export default SignUp;