import React, {Component} from 'react';
import Newgoal from './Newgoal'
import Goalform from './Goalform'
import Goal from './Goal'

class Body extends Component{

    constructor(){
        super();
        this.state = {
            data:[]
        }
        this.data = []
    }

    apiCall(url,consecuencia){
        fetch(url)
            .then( response => response.json())
            .then( data => consecuencia(data))
            .catch(error => console.log(error))
    }

    componentDidMount(){
        this.apiCall('http://localhost:3333/api',this.mostrarData)
    }

    mostrarData = (data) => {
        
        this.setState({
            data: data
        })
        
    }
    

    render(){
    return(
            <div>
                    <br/><br/>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 id="text-banner"> Set your goals for today. Need some motivation? Pay if you fail.</h3>
                        </div>
                    </div>
                </div>

                <Newgoal /> {/* Componente basico, muestra el contenedor para agregar un nuevo goal */}
                
                {this.state.data.map((data,i)=>{
                return <Goal 
                    id = {data.id} /* Esto tiene que ser un array. Checkear */
                    goal = {data.goal}
                    date = {data.date}
                    user_id = {data.user_id}
                    completed = {data.completed}
                />
                })}
                <Goalform /> {/*Form que salta para introducir goal y el pago.*/}
            </div>
    )
    }
}

export default Body