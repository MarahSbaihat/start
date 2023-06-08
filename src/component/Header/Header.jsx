import React, {Component} from 'react';
import './Header.module.css';
import '@fortawesome/fontawesome-free';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

export default class Header extends Component {
    render(){
        return (
            <>
                <header className="header d-flex justify-content-center align-items-center mb-5">
                    <div className="div">
                        <img src="/avataaars.svg" alt="avataaars" />
                        <h1 className="h1 text-uppercase">start bootstrap</h1>
                        <div className="d-flex justify-content-center align-items-center py-3">
                            <div className="line" />
                            <i className="fa-solid fa-star mx-2" />
                            <div className="line" />
                        </div>
                        <p className="p text-capitalize">graphic artist - web designer - illustrator</p>
                    </div>
                </header>
            </>
        )
    }
}