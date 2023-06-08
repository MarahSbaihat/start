import React, {Component} from 'react';
import './About.module.css';
import '@fortawesome/fontawesome-free';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

export default class About extends Component {
    render(){
        return (
            <>
                <section className="about py-4" id="about">
                    <div className="container1 text-center pb-5">
                        <h2 className="h2 text-uppercase text-center">about</h2>
                        <div className="div d-flex justify-content-center align-items-center py-3">
                            <div className="line" />
                            <i className="fa-solid fa-star mx-2 star" />
                            <div className="line" />
                        </div>
                        <div className="row mb-5 mt-2">
                            <div className="col-md-6">
                                <p className="p">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                            </div>
                            <div className="col-md-6">
                                <p className="p">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                            </div>
                        </div>
                        <a className="text-capitalize py-3 px-3" href="#"><i className="fa-solid fa-download me-2" />free download</a>
                    </div>
                </section>
            </>
        )
    }
}