import React from "react";
import { Button, Navbar, Form, FormControl } from 'react-bootstrap';
import './Custom.css';

class Nav extends React.Component{
    render(){
        return(
            <div className="Nav">
                <Navbar bg="dark" variant="dark">
                    <ul>
                        <li><a class="active" href="#home">Home</a></li>
                        <li><a href="#news">News</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
                </Navbar>
            </div>
        )
    }
}


export default Nav;