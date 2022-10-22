import { Component } from "react";
import {Link} from "react-router-dom"


class Explore extends Component{
    render(){
        return(
        <div className="explore-parent">
            <div className="container">
                <div className="row">
                <div className="col-lg-6">
                    <h5><span data-aos="fade-up" data-aos-duration="1000">So,</span> <span data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">you</span> 
                    <span data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">want</span> <span data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">to</span>
                     <span data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">travel</span> <span data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">to</span></h5>
                    <h1 data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="600" className="spaceHead">Space</h1>
                    <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">Let’s face it; if you want to go to space, you might as well genuinely go to
                         outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll 
                         give you a truly out of this world experience!</p>
                </div>
                <div className="col-lg-6 e-parent">

                <Link to="/Destination" style={{color:"black !important"}}> <div className="explore-button" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="700">
                        <span><h5> EXPLORE</h5></span>
                    </div>
                    </Link>
                </div>
                </div>
            </div>
        </div>
        )
    }
}
export default Explore