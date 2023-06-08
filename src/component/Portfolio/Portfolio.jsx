import React, {Component} from 'react';
import './Portfolio.module.css';
import '@fortawesome/fontawesome-free';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import PortfolioChild from '../PortfolioChild/PortfolioChild';

export default class Portfolio extends Component {
    render(){
        return (
            <>
                <section className="portfolio" id="portfolio">
                    <div className="container">
                        <h2 className="h2 text-uppercase pt-5">portfolio</h2>
                        <div className="d-flex justify-content-center align-items-center py-3">
                            <div className="line" />
                            <i className="fa-solid fa-star mx-2 star" />
                            <div className="line" />
                        </div>
                        <div className="row my-4">
                            <PortfolioChild />
                        </div>
                    </div>
                </section>
            </>
        )
    }
}