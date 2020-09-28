import React, { Component } from 'react';

class Newgoal extends Component{
    desplegarGoalform(){
        document.getElementById("goal-form").style.height = "60%"
        document.getElementById("goal-form").style.borderTop = 'solid 1px #b40600';
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    <div className="goal-bar">
                        <button className="boton-add" onClick={this.desplegarGoalform} type="button">
                        +
                        </button>
                        <h2 className="new-goal">Set new goal.</h2>
                    </div>
                    </div>
                </div>
            </div>
        )
    } 
}

export default Newgoal