import React, { Component } from 'react';

class Goal extends Component{

    constructor(props){
        super(props);
        this.state = {
          goal: [props.goal]
        }
    }

    completado(){
 
    }


    componentDidMount(props){
     
    }

    componentDidUpdate(){
        //Complete el goal! Parte de backend iria aca (state = Completado)
    }

    componentWillUnmount(){
        //HOY A LAS 23:59, VOY A CADUCAR. If completado, no pagas, else si.
        //Cancelaciones, etc
    }
    
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12" id='goal-container'  >
                        {this.state.goal.map (objetivo=><div onClick={()=>this.completado()} class='your-goal'>
                            <h4 key={objetivo} style={{paddingTop: "2px"}}>{objetivo}</h4>
                        </div>)}
                    </div>
                </div>
            </div>
        )
    } 
}

export default Goal