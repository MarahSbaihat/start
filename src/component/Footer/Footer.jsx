import React, {Component} from 'react';
import './Footer.module.css';
import '@fortawesome/fontawesome-free';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

export default class Footer extends Component {
    render(){
        return (
            <>
                <footer className="footer">
                    <div className="footer1">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <h3 className="h3 text-uppercase mb-5">location</h3>
                                    <p className="p">2215 John Daniel Drive <br /> Clark, MO 65243</p>
                                </div>
                                <div className="col-md-4">
                                    <h3 className="h3 text-uppercase mb-5">around the web</h3>
                                    <a className="py-2 px-2 mx-1 link" href="#"><i className="fa-brands fa-facebook-f" /></a>
                                    <a className="py-2 px-2 mx-1 link" href="#"><i className="fa-brands fa-twitter" /></a>
                                    <a className="py-2 px-2 mx-1 link" href="#"><i className="fa-brands fa-linkedin-in" /></a>
                                    <a className="py-2 px-2 mx-1 link" href="#"><i className="fa-brands fa-dribbble" /></a>
                                </div>
                                <div className="col-md-4">
                                    <h3 className="h3 text-uppercase mb-5">about freelancer</h3>
                                    <p className="p">Freelance is a free to use, MIT <br></br> licensed Bootstrap theme created <br></br> by<a className='links' href="#">Start Bootstrap</a>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer2">
                        <p className="p text-capitalize py-4">copyright © your website 2022</p>
                    </div>
                </footer>
            </>
        )
    }
}