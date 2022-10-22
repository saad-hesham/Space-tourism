import { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../images/shared/logo.svg"
import menu from "../images/shared/icon-hamburger.svg"
import close from "../images/shared/icon-close.svg"
class Navbar extends Component{
  componentDidMount(){
    //this functiong will edit content of navbar in small screen
window.onresize =function(){
  if (window.matchMedia("(min-width: 577px)").matches) {
    closeIcon.style.display="none"
    menuIcon.style.display="none"

  } else {
    menuIcon.style.display="block"
    closeIcon.style.display="none"
}
}
// open and close variables
let menuIcon = document.querySelector(".menu");
let closeIcon = document.querySelector(".close");
//this function will open menu
menuIcon.onclick = function(){
  document.querySelector("ul").classList.toggle("active")
  closeIcon.style.display="block"
  menuIcon.style.display="none"
}
//this function will close menu
closeIcon.onclick = function(){
  document.querySelector("ul").classList.toggle("active")
  closeIcon.style.display="none"
  menuIcon.style.display="block"
}
//this function will add active class on navbar and remove from others
function getURL() {
  let id = window.location.pathname
  let link = document.getElementById(id.substring(1,id.length));
  let links = document.querySelectorAll("li")
 
if(id!=="/"){
  for(let i = 0 ; i<= links.length-1 ; i++){
links[i].classList.remove("navactive")
  }
 link.classList.add("navactive")
}

}
getURL()
  }
  render(){
    return(
        <nav>
      <div className="container">
        <div className="row">
        <div className="col-lg-6 col-sm-4 logo"><img src={logo} alt="logo" className="logo"/></div>
        <div className="col-lg-6 col-sm-6 list">
          <ul className="">
          <li className="navactive"><Link to ="/">Home </Link><span></span> </li>
          <li className="" id="Destination"><Link to="/Destination">Destination</Link> <span></span></li>
          <li className=""  id="Crew"><Link to="/Crew">Crew</Link> <span></span></li>
          <li className="" id="Technology"><Link to="/Technology">Technology</Link> <span></span></li>
         
          </ul>
          <img src={menu} className="menu" alt="open-ul-button"/>
          <img src={close} className="close" alt="close-ul-button"/>
        </div>
        </div>
      </div>
        </nav>
    )
}
}
export default Navbar