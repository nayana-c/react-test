import React from 'react';

class HttpService {
   constructor() {
     this.data = "Hello data from HttpService";
     this.getData = this.getData.bind(this);
   }
 
   getData(data) {
     return this.data;
   }
 }


 const http = new HttpService();


class Counter extends React.Component {

   constructor() {
      super();
      var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
      var firstDate = new Date('1992-11-04T08:00:00Z');
      var secondDate = new Date();  
      
      var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));

      var diffseconds = Math.round(Math.abs(firstDate.getTime() - secondDate.getTime()));

      console.log(diffseconds);
      var minutes = Math.floor(diffseconds / 60000);
      var seconds = Math.round((diffseconds) / 1000);

      this.state = {
         time : seconds,
         day : diffDays
      }
      this.startTimer = this.startTimer.bind(this);
      this.startTimer();
   };

   startTimer() {
     
      this.timer = setInterval(() => this.setState({
         time: this.state.time + 1
       }), 1000)
       this.timer = setInterval(() => this.setState({
         day: this.state.day + 1
       }), 86400000)
   };

   render() {
      return (
         <div>
            <h3>{this.state.time} seconds lived on this earth and counting...</h3>
            <h3>{this.state.day} days lived on this earth and counting...</h3>
         </div>
      );
   }
}
export default Counter;