import { Component } from "react";
import Navbar from "./Navbar";
import Explore from "./Explore";

class Header extends Component{
    render(){
        return(
            <header>
          <Navbar/>
          <Explore/>
            </header>
        )
    }
}
export default Header