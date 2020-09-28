import React, { Component } from 'react';
import Paybtn from './Paybtn';

class Goalform extends Component{
    cerrarGoalform(){
        document.getElementById("goal-form").style.height = "0";
        document.getElementById("goal-form").style.borderTop = '0';
    }

    agregarGoalcard(e){ //Esto probablemete no vaya asi, seguro se maneja con estados y ciclos de vida
        e.preventDefault()
        var goal = document.querySelector('#goal').value;
        document.querySelector('#goal-container').innerHTML += 
        `<div class='your-goal'>
        <h4 id='cross' onclick= "tachar()" class='new-goal'>${goal}</h4>
        </div>`
    }

    apiCall(){
        fetch('http://localhost:3333/api/addGoal',{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              yourGoal: document.querySelector('#goal').value
            })
          })
          
            .then( response => response.json())
            .then(console.log(document.querySelector('#goal').value))
            .catch(error => console.log(error))
    }


    render(){
        return(
            <div>
                <div className='container'>
                    <div id= 'goal-form'>
                    <br/>
                    <a id="cerrar-form" onClick={ this.cerrarGoalform }>&times;</a>
                        <div className='row'>
                            <form className='col-12'>
                                <div className='col-12'>
                                    <label htmlFor="goal" className="form-group" id='labelform'> <h3 className='texto'>What are you going to accomplish today?</h3></label>
                                    <input type="text" id="goal" name="goal" placeholder="Set your goal." className="form-control" />
                                </div>
                                <div className='col-12'>
                                    <h3 className='texto'>What if you fail? Set a punishment</h3>
                                </div>
                                <div className='row'>
                                    <Paybtn 
                                        option="I'll pay $1"
                                    />
                                    <Paybtn
                                        option="I'll pay $5"
                                     />
                                    <Paybtn 
                                        option="I'll pay $10"
                                    />
                                    <Paybtn 
                                        option="I'll pay $50"
                                    />
                                    <Paybtn 
                                        option="Custom"
                                    />
                                    <Paybtn 
                                        option="Nothing..."
                                    />
                                    <div className='col-12 btn-wrap'>
                                        <button id='save-btn' onClick = {this.agregarGoalcard} onClick = {this.apiCall}>
                                            <h3>Save</h3>
                                        </button>
                                    </div>
                                    <div className='col-12'>
                                        <h6 className='texto'>You have until (fecha) 23:59hs to complete the goal. Your payment will be processed only if you don't accomplish your goal.</h6>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    } 
}

export default Goalform