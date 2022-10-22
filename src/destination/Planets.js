import { Component } from "react";
class Planets extends Component{
  componentDidMount(){
let planetslist = document.querySelectorAll(".planet-el")
let planents = document.querySelectorAll(".planet")

for(let i = 0 ; i <= planetslist.length-1 ; i++){
 planetslist[i].onclick = function(){
  for(let i = 0 ; i <= planetslist.length-1 ; i++){
    planetslist[i].classList.remove("planetactive")
  }
  planetslist[i].classList.add("planetactive")
  for(let i = 0 ; i<=planents.length-1 ; i++){
    planents[i].style.display="none"
  }
  document.getElementById(planetslist[i].getAttribute("data-attr")).style.display="flex"
  // console.log(planetslist[i].getAttribute("data-attr"))
 }
}

}
    render(){
        return(
  <div>
    <div className="planets-parent">
        <div className="container">
            <div className="row" style={{justifyContent:"space-between"}}>
            <div className="col-lg-7 pick-dist">
            <h5>01 Pick your destination</h5>

            </div>
            <div className="col-lg-5 planet-list">
            <ul>
                    <li className="planet-el planetactive" data-attr="moon">Moon</li>
                    <li className="planet-el" data-attr="mars">Mars</li>
                    <li className="planet-el" data-attr="europa">Europa</li>
                    <li className="planet-el" data-attr="titan">Titan </li>
                    </ul>

            </div>
       
    <div className="row planet" style={{justifyContent:"space-between"}} id="moon" >
    <div className="col-lg-4 planet-block moon">
                    <div className="moon-moving">
                        
                    </div>
                </div>
       
                <div className="col-lg-5 planet-info moon-info">
                    <h1>Moon </h1>
                    <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites</p>
                  <hr></hr>
                  <div className="row data">
                  <div className="col-sm-6">
                    <h6>Avg. distance</h6>
                    <h3> 384,400 km</h3>
                  </div>
                  <div className="col-sm-6">
                  <h6>Est. travel time</h6>
                    <h3> 3 days</h3>
                  </div>
                </div>
                </div>
    </div>
 {/*------------------ mars section-------------------- */}

    <div className="row planet" style={{justifyContent:"space-between",display:"none"}} id="mars" >
    <div className="col-lg-4 planet-block mars">
                    <div className="mars-moving">
                        
                    </div>
                </div>
       
                <div className="col-lg-5 planet-info mars-info">
                    <h1>Mars  </h1>
                    <p>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>
                  <hr></hr>
                  <div className="row data">
                  <div className="col-sm-6">
                    <h6>Avg. distance</h6>
                    <h3> 225 mil. km</h3>
                  </div>
                  <div className="col-sm-6">
                  <h6>Est. travel time</h6>
                    <h3> 9 months</h3>
                  </div>
                </div>
                </div>
    </div>
                
                 {/*------------------ europa section-------------------- */}


                 <div className="row planet" style={{justifyContent:"space-between",display:"none"}} id="europa" >
    <div className="col-lg-4 planet-block europa">
                    <div className="europa-moving">
                        
                    </div>
                </div>
       
                <div className="col-lg-5 planet-info europa-info">
                    <h1>Europa  </h1>
                    <p>Europa The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin</p>
                  <hr></hr>
                  <div className="row data">
                  <div className="col-sm-6">
                    <h6>Avg. distance</h6>
                    <h3> 628 mil. km</h3>
                  </div>
                  <div className="col-sm-6">
                  <h6>Est. travel time</h6>
                    <h3> 3 years</h3>
                  </div>
                </div>
                </div>
               </div>
                                {/*------------------ titan section-------------------- */}
                                <div className="row planet" style={{justifyContent:"space-between",display:"none"}} id="titan" >
    <div className="col-lg-4 planet-block titan">
                    <div className="titan-moving">
                        
                    </div>
                </div>
       
                <div className="col-lg-5 planet-info earth-info">
                    <h1>Titan   </h1>
                    <p>Titan The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn. </p>
                  <hr></hr>
                  <div className="row data">
                  <div className="col-sm-6">
                    <h6>Avg. distance</h6>
                    <h3> 1.6 bil. km</h3>
                  </div>
                  <div className="col-sm-6">
                  <h6>Est. travel time</h6>
                    <h3> 7 years</h3>
                  </div>
                </div>
                </div>
               </div>


                
            </div>
        </div>
    </div>
   
    
  </div>
        )
    }
}
export default Planets