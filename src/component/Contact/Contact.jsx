import React, {Component} from 'react';
import './Contact.module.css';
import '@fortawesome/fontawesome-free';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

export default class Contact extends Component {
    render(){
        return (
            <>
                <section className="contact" id="contact">
                    <div className="container text-center pt-5">
                        <h2 className="h2 text-uppercase pt-5">contact me</h2>
                        <div className="d-flex justify-content-center align-items-center py-3 pb-5">
                            <div className="line" />
                            <i className="fa-solid fa-star mx-2 star" />
                            <div className="line" />
                        </div>
                        <div className="message d-flex flex-column">
                            <input type="text" placeholder="Full Name" />
                            <input type="text" placeholder="Email Address" />
                            <input type="text" placeholder="Phone Number" />
                            <textarea name id placeholder="Message" defaultValue={""} />
                            <a href="#" className="send text-uppercase my-3 py-3 px-4">send</a>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}