import React, {Component} from 'react';
import "./Navbar.module.css";

export default class Navbar extends Component {
    render(){
        return (
            <>
                <nav className="navbar navbar-expand-lg fixed-top">
                    <div className="container d-flex">
                        <a className="navbar-brand text-capitalize" href="#">start bootstrap</a>
                        <button className="navbar-toggler ms-auto text-capitalize" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            menu<span className="navbar-toggler-icon" />
                        </button>
                        <div className="ms-auto collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link text-uppercase active" aria-current="page" href="#portfolio">portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-uppercase" href="#about">about</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-uppercase" href="#contact">contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}