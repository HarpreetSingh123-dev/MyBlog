import React, { Component } from 'react';
import './Landing-Display.css'
import {Link} from 'react-router-dom'
import image1 from '../Images-Set/slide2.jpg'

class LandingDisplay extends Component {
    render() {
        return (
            <div className="Landing-Display-Main">

                 <h2 className="text-center">What About Suppliments</h2>
                 <hr></hr>
                 <p className="text-center">Browse Some of the Suppliments from my online store </p>
                 
                  <div className="container-fluid">
                   <div className="container">
                   <Link to="/shopping">  <div className="aa">
                   <img src={image1}></img>
                
                    <div className="details">
                       <div className="content">
                        <h1><b>Some Exciting Offers Inside! <br></br> 
                        Shop Now!</b></h1>

                       </div>
                    </div>
                    
                   </div></Link>
                   </div>
                 </div>
            
            </div>
        );
    }
}

export default LandingDisplay;