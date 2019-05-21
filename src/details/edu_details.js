import React from 'react';
import Line from '../line/line';

class Edu_details extends React.Component {
    constructor() {
       super();
         
       this.state = {
          data: []
       }
     
    };
 
    render() {
       return (
          <div>
               <div>
                  <h4>Dhanalakshmi Srinivasan Engineering College / BTech</h4>
                  <span className="sub-head">July 2011 - May 2015, Perambalur</span>
                  <p>
                  Has secured 75% in Bachelor of Technology in the stream of Information Technology conducted by Anna University. 
                  </p>
               </div>
               <Line/>
               <div>
               <h4>Vimala Hridaya ISC School / Higher Secondary</h4>
                  <span className="sub-head">June 2009 - May 2011, Kollam</span>
                  <p>
                  Has secured 70% in ISC board examination conducted by Delhi University. 
                  </p>
               </div>
               <Line/>
               <div>
               <h4>Vimala Hridaya ICSE School / High School</h4>
                  <span className="sub-head">June 2008 - May 2009, Kollam</span>
                  <p>
                  Has secured 78% in ICSE board examination conducted by Delhi University. 
                  </p>
               </div>
          </div>
       );
    }
 }
 export default Edu_details;