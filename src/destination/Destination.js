import { Component } from "react";
import Explore from "../Home/Explore";
import Navbar from "../Home/Navbar";
import Planets from "./Planets";


class Destination extends Component{
    render(){
        return(
  <div >
    <Navbar/>
    <Planets/>
    
  </div>
        )
    }
}
export default Destination