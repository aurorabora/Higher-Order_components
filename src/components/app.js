import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import { Route } from 'react-router-dom';
import Nav from './nav';
import Home from './home';
import About from './about'
import SecretDocs from './secret_doc';
import OperativesList from './operative_list'
import SignUp from './sign_up';

const App = () => (
    <div>
        <Nav/>
        <div className="container">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/secret-doc" component={SecretDocs} />
            <Route path="/operative-list" component={OperativesList}/>
            <Route path="/sign_up" component={SignUp}/>
        </div>
    </div>
);

export default App;
