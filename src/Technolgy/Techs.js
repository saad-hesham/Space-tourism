import { Component } from "react";
import vec from "../images/technology/image-launch-vehicle-portrait.jpg"
import vect from "../images/technology/image-spaceport-portrait.jpg"
import vecf from "../images/technology/image-space-capsule-portrait.jpg"

class Techs extends Component{
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
            <h5>03 SPACE LAUNCH 101</h5>

            </div>
   
       
    <div className="row planet" style={{justifyContent:"space-between",alignItems:"center"}} id="first" >
       
                <div className="col-lg-5 planet-info moon-info">
                    <span>The terminology...</span>
                    <h1>Launch vehicle </h1>
                    <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
                </div>
                <div className="col-lg-4 planet-block moon">
                    <img src={vec} alt="vec" className="imgCrew"/>
                </div>
    </div>
 {/*------------------ mars section-------------------- */}

 <div className="row planet" style={{justifyContent:"space-between",alignItems:"center",display:"none"}} id="second" >
       
       <div className="col-lg-5 planet-info moon-info">
            <span>The terminology...</span>
           <h1>Spaceport </h1>
           <p>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.</p>
       </div>
       <div className="col-lg-4 planet-block moon">
       <img src={vect} alt="vectwo" className="imgCrew"/>
       </div>
</div>
                
                 {/*------------------ europa section-------------------- */}


                 <div className="row planet" style={{justifyContent:"space-between",alignItems:"center",display:"none"}} id="third" >
       
       <div className="col-lg-5 planet-info moon-info">
           <span>The terminology... </span>
           <h1>Space capsule</h1>
           <p>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>
       </div>
       <div className="col-lg-4 planet-block moon">
       <img src={vecf} alt="vecthree" className="imgCrew"/>
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
                               <img  alt="commander" className="imgCrew"/>
                                   </div>
                                   
                                      </div>

                                      <div className="crew-list">
            <ul>
                    <li className="crew-dot crew-active" data-attr="first"><span></span></li>
                    <li className="crew-dot" data-attr="second"><span></span></li>
                    <li className="crew-dot" data-attr="third"><span></span></li>
                    </ul>

            </div>
            </div>
        </div>
    </div>
   
    
  </div>
        )
    }
}
export default Techs