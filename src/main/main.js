import React from 'react';
import Line from '../line/line';
import Lhs from '../lhs/lhs';
import Box from "../box/box" 

import "./main.css";



class Main extends React.Component {
    constructor() {
       super();
             
    };
 
    render() {
       return (
          <div className="container">
               <Lhs/>
               <Box/>
          </div>
       );
    }
 }
 export default Main;