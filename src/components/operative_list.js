import React from 'react';
import auth from '../hoc/auth';

const OpList = props => (
    

        <div className="Container">
        <h1 className="center"> Secret Operative List </h1>
        <ol>
            <li>Corey</li>
            <li> Sarah </li>
            <li> Steve </li>
            <li> George</li>
        </ol>
        </div>
    );

    export default auth(OpList); 

    
