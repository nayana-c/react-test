import React from 'react';
import Line from '../line/line';
import './details.css';

class Details extends React.Component {
    constructor() {
       super();
         
       this.state = {
          data: []
       }
     
    };
 
    render() {
       return (
          <div>
               <div className="details">
                  <h4>Software Engineer</h4>
                  <span className="sub-head">August 2018 - Present, Bangalore 560102</span>
                  <p>
                  The technologies used are NodeJs, Angular 2+, Jquery, MySQL. Duties performed are: 
                  ❖ Risk taking attitude to explore every corner of technology to get the job done.
                  ❖ Exposure implementing different processes and have been actively 
                  involved in software development process. 
                  ❖ Result oriented, self-driven, motivated, smart and hungry to learn 
                  new technologies, methodologies, strategies and processes.
                  </p>
               </div>
               <Line/>
               <div>
               <h4>Associate Software Engineer</h4>
                  <span className="sub-head">November 2016 - July 2018, Bangalore 560102</span>
                  <p>
                  The technologies used are NodeJs, Angular 2+, Jquery, MySQL. Duties performed are: 
                  ● Understanding requirement and preparing database schema design. 
                  ● Setting up the project, creating back-end APIs required for mobile (Android + iOS) developers to communicate with backend. 
                  ● Manage team of young developers and break down task for them to get the work out of the team and enhance their skill set.
                  </p>
               </div>
          </div>
       );
    }
 }
 export default Details;