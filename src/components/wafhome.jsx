import React, { Component } from 'react'
import './wafhome.css'
import doctor from '../bgimages/doctor1.png'
import logo from '../bgimages/LOGO1.png'
class WafHome extends Component {
    state = {}
    render() {
        return (
            <div className='body'>
                <div className='home'>
                    <nav>
                        <input type="checkbox" id="check" />
                        <label for="check" className="checkbtn">
                            <i className="fas fa-bars"></i>
                        </label>

                        <img src={logo} alt="" width="150" height="150" />
                        <label className="logo" >ForHeart</label>

                        <ul>

                            <li><a className="navlinks" href="/">Description</a></li>
                            <li><a className="navlinks" href="/">Predict</a></li>
                            <li><a className="navlinks" href="/">Fitness</a></li>
                            <li><a className="navlinks" href="/">About Us</a></li>
                        </ul>
                    </nav>

                    <div className="heading1">
      <p className="abtsubhead" ><b>Predict the chances of getting Heart-Attack</b></p>
    </div>


    <div style={{width: "100%"}}>
      <div  className="abt"><p>Lorem ipsum dolor sit amet consectetur adipisicing 
        elit. Rem magnam reiciendis facilis illum rerum inventore, voluptate aspernatur ipsam itaque. Ea laudantium voluptatum 
        nostrum necessitatibus similique provident, quisquam saepe aliquid nesciunt! Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Ullam dolor nulla corporis non, quo eligendi corrupti repudiandae nesciunt nam omnis, voluptate quam 
        voluptatibus officia est alias impedit, sunt commodi aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Saepe sunt recusandae id optio fugit sed vel. Veniam nobis ipsa quo? Blanditiis sequi aperiam velit veniam dolorem 
         dolores suscipit neque voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

         
      </div>
      <div style={{marginLeft: "50%" , paddingLeft: "15%"}}> 
        <img src={doctor} alt="" className="docimg" style={{height: "500px", width: "400px"}}/>
      </div>
  </div>

  <button className="button-9" role="button">Predict</button>
  





                </div>

            </div>
        );
    }
}

export default WafHome;