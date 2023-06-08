import React, { Component } from 'react';
import '@fortawesome/fontawesome-free';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

export default class PortfolioChild extends Component {
  render() {
    return (
        <>
            <div className="col-md-4">
                <div className="overflow">
                    <i className="fa-solid fa-plus" />
                </div>
                <img src="/cabin.png" alt="cabin" />
            </div>
            <div className="col-md-4">
                <div className="overflow">
                    <i className="fa-solid fa-plus" />
                </div>
                <img src="/cake.png" alt="cake" />
            </div>
            <div className="col-md-4">
                <div className="overflow">
                    <i className="fa-solid fa-plus" />
                </div>
                <img src="/circus.png" alt="circus" />
            </div>
            <div className="col-md-4">
                <div className="overflow">
                    <i className="fa-solid fa-plus" />
                </div>
                <img src="/game.png" alt="game" />
            </div>
            <div className="col-md-4">
                <div className="overflow">
                    <i className="fa-solid fa-plus" />
                </div>
                <img src="/safe.png" alt="safe" />
            </div>
            <div className="col-md-4">
                <div className="overflow">
                    <i className="fa-solid fa-plus" />
                </div>
                <img src="/submarine.png" alt="submarine" />
            </div>
        </>
    )
  }
}
