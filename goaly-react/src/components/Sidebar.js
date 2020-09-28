import React, { Component } from 'react';

class Sidebar extends Component{
    cerrarSidebar(){
        document.getElementById("mySidebar").style.width = "0%";
        document.querySelector("header").style.marginLeft = "0%";
    }
    render(){
        return(
            <div>
                <div id="mySidebar" className="sidebar">
                    <a className="closebtn" onClick={ this.cerrarSidebar }>&times;</a>
                    <a href="">Your profile</a>
                    <a href="">About</a>
                </div>
            </div>
        )
    } 
}

export default Sidebar