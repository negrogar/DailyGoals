import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

class Header extends Component{


    render(){
        return(  
            <div>
                <Topbar />
                <Sidebar />
            </div>
        )
    }
}

export default Header