import { Component } from "react";
import Navbar from "../Home/Navbar"
import CrewMembers from "./CrewMembers";


class Crew extends Component{
    render(){
        return(
  <div >
   <Navbar/>
   <CrewMembers/>
  </div>
        )
    }
}
export default Crew