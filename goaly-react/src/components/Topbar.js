import React, { Component } from 'react';

class Topbar extends Component{
    desplegarSidebar(){
        document.getElementById("mySidebar").style.width = "100%";
        
    }
    render(){
        return(
            <div>
                <header className="header">
                    <div className="container">
                    <div className="row">
                        <div className="col-3">
                        <button type="button" className="openbtn" onClick= {this.desplegarSidebar}>
                            <span>&#9776;</span>
                        </button>
                        </div>
                        <div className="col-6">
                        <h1 className="title">Goaly</h1>
                        </div>
                    </div>
                    </div>
                </header>
            </div>
        )
    } 
}

export default Topbar