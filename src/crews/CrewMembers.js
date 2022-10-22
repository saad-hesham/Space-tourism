import { Component } from "react";
import commander from "../images/crew/image-douglas-hurley.webp"
import misson from "../images/crew/image-mark-shuttleworth.png"
import pilot from "../images/crew/image-victor-glover.png"
import speaker from "../images/crew/image-anousheh-ansari.webp"
class CrewMembers extends Component{
  componentDidMount(){
    let crewList = document.querySelectorAll(".crew-dot")
    let crews = document.querySelectorAll(".planet")
    
for(let i = 0 ; i<=crewList.length-1 ; i++){
  crewList[i].onclick = function(){
    for(let i = 0 ; i <=crewList.length-1 ; i++){
      crewList[i].classList.remove("crew-active")
    }
    crewList[i].classList.add("crew-active")
    for(let i = 0 ; i <=crews.length-1; i++){
      crews[i].style.display="none"
    
    }
document.getElementById( crewList[i].getAttribute("data-attr")).style.display="flex"

  }
}
    
    }

    render(){
        return(
  <div>
    <div className="planets-parent">
        <div className="container">
            <div className="row" style={{justifyContent:"space-between"}}>
            <div className="col-lg-7 pick-dist" >
            <h5>02 Meet your crew</h5>

            </div>
   
       
    <div className="row planet" style={{justifyContent:"space-between",alignItems:"center"}} id="first" >
       
                <div className="col-lg-5 planet-info moon-info">
                    <span>Commander</span>
                    <h1>Douglas Hurley </h1>
                    <p>Douglas Hurley Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2</p>
                </div>
                <div className="col-lg-4 planet-block moon">
                    <img src={commander} alt="commander" className="imgCrew"/>
                </div>
    </div>
 {/*------------------ mars section-------------------- */}

 <div className="row planet" style={{justifyContent:"space-between",alignItems:"center",display:"none"}} id="second" >
       
       <div className="col-lg-5 planet-info moon-info">
           <span>Mission Specialist</span>
           <h1>Mark Shuttleworth  </h1>
           <p>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
       </div>
       <div className="col-lg-4 planet-block moon">
           <img src={misson} alt="commander" className="imgCrew"/>
       </div>
</div>
                
                 {/*------------------ europa section-------------------- */}


                 <div className="row planet" style={{justifyContent:"space-between",alignItems:"center",display:"none"}} id="third" >
       
       <div className="col-lg-5 planet-info moon-info">
           <span>Pilot </span>
           <h1>Victor Glover</h1>
           <p>Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.</p>
       </div>
       <div className="col-lg-4 planet-block moon">
           <img src={pilot} alt="commander" className="imgCrew"/>
       </div>
</div>
                                {/*------------------ titan section-------------------- */}
                                <div className="row planet" style={{justifyContent:"space-between",alignItems:"center",display:"none"}} id="fourth" >
       
                              <div className="col-lg-5 planet-info moon-info">
                                <span>Flight Engineer </span>
                                <h1>Anousheh Ansari</h1>
                               <p>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.</p>
                               </div>
                               <div className="col-lg-4 planet-block moon">
                               <img src={speaker} alt="commander" className="imgCrew"/>
                                   </div>
                                   
                                      </div>

                                      <div className="crew-list">
            <ul>
                    <li className="crew-dot crew-active" data-attr="first"><span></span></li>
                    <li className="crew-dot" data-attr="second"><span></span></li>
                    <li className="crew-dot" data-attr="third"><span></span></li>
                    <li className="crew-dot" data-attr="fourth"><span></span></li>
                    </ul>

            </div>
            </div>
        </div>
    </div>
   
    
  </div>
        )
    }
}
export default CrewMembers