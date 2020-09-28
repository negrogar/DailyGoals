import React, {Component}  from 'react';
import Header from './components/Header'
import Body from './components/Body'


class App extends Component {

  componentDidMount(){
    window.gapi.load('auth2',()=>{
      window.gapi.auth2.init({
        client_id: '891621180008-hl72s7197gqqqn0mm61pq0kvacusvip5.apps.googleusercontent.com' 
      })
      console.log("Arranco la API PERRO")
    })
  }

  render(){
  return (
    <div>
      <Header />
      <Body />
    </div>
  )
  }
}

export default App;
