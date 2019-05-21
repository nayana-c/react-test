import React from 'react';
import "./box.css";

import  Details from '../details/details';
import  Edu_details from '../details/edu_details';
import  Interest from '../details/interest';

import Line from '../line/line';

class Box extends React.Component {
    constructor() {
       super();
         
       this.state = {
          data: []
       }
     
    };
 
    render() {
       return (
          <div className="container">
              <div className="box">
                <h2>Work Experience</h2>
                <Details/>
              </div>
              <div className="box">
                <h2>Education</h2>
                <Edu_details/>
              </div>
              <div className="box">
                <h2>Interests</h2>
                <Interest/>
              </div>
            
          </div>
       );
    }
 }
 export default Box;