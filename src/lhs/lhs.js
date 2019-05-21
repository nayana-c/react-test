import React from 'react';
import Line from '../line/line';
import "./lhs.css";
import Details from "./details";


class Lhs extends React.Component {
    constructor() {
       super();
       this.state = {
         isLoading : false,
         message : 'dfv'

       }
             
    };


    componentDidMount() {

      var url = 'https://api.linkedin.com/v2/me?projection=(id,firstName,lastName,profilePicture(displayImage~:playableStreams))';
      var bearer = 'Bearer AQXVpo9xm59nJ1MD-kPgJR2OhW8mwag29IoS_jZ0sh59UVkGfrqjo1c4jrI4I59YgyTouIv4afrbQ04uyPKmqlsmCXkzIbVoyQ7r3tFGW9cSfTfB8LVFk_-j12MiLnAiFp2aa4tjbWsKrUJFfu61mmpu4u1uR1rTvZdbgo7SkAucLtNxw_J93YO8o9AlkgQia-rC0s1Of9S8ojxNSIIxgK5ewPq90Pgp5gDTc7E08QvYZVl9xQesJQQ8H3Qf-vA9s78ppTbMg6O6qMcVL8Jlad6-jQ2_WXk6d5AnZ1M18wiYXWNAQUfgrgMi4itvaVPJfX_FtAgbtVaCbQpwKDhBbewdQNRgLQ';

      fetch(url, {
         method: 'GET',
         withCredentials: true,
         credentials: 'include',
         headers: {
             'Authorization': bearer,
             
         }
      }).then(responseJson => {
          //  var items = JSON.parse(responseJson._bodyInit);

            console.log(responseJson)
      })
      .catch(error => this.setState({
            isLoading: false,
            message: 'Something bad happened ' + error
      }));
      
    }
 
    render() {
       return (
          <div className="box-lhs">
            <div>
                <h2>Nayana Chithran </h2>
            </div>
            <Details/>
          </div>
       );
    }
 }
 export default Lhs;