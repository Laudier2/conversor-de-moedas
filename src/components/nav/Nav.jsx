import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-primary col-md-12">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <h2 className="mr-6">Conversor de moedas</h2>
        </div>
      </nav>
      <div></div>
      <div
        className="collapse bg-light btn-group-toggle p-2"
        id="navbarToggleExternalContent"
      >
        <br />
        <div className="bg-dark col-md-1"></div>
        <Link to="/" className="nav-link text-info btn btn-light marg ml-1 bg-dark">
          <strong className="flt">USD</strong>

        </Link>
        <Link to="/eur" className="nav-link text-info btn btn-light marg ml-1 bg-dark">
          <strong className="flt">EUR</strong>

        </Link>
        <Link to="/btc" className="nav-link text-info btn btn-light marg ml-1 bg-dark">
          <strong className="flt">BTC</strong>

        </Link>
        <Link to="/doge" className="nav-link text-info btn btn-light marg ml-1 bg-dark">
          <strong className="flt">DOGE</strong>

        </Link>
        <Link to="/ars" className="nav-link text-info btn btn-light marg ml-1 bg-dark">
          <strong className="flt">ARS</strong>

        </Link>
        <Link to="/aud" className="nav-link text-info btn btn-light marg ml-1 bg-dark">
          <strong className="flt">AUD</strong>

        </Link>
        <Link to="/cad" className="nav-link text-info btn btn-light marg ml-1 bg-dark">
          <strong className="flt">CAD</strong>

        </Link>
        <Link to="/chf" className="nav-link text-info btn btn-light marg ml-1 bg-dark">
          <strong className="flt">CHF</strong>

        </Link>
        <Link to="/cny" className="nav-link text-info btn btn-light marg ml-1 bg-dark">
          <strong className="flt">CNY</strong>

        </Link>
        <Link to="/eth" className="nav-link text-info btn btn-light marg ml-1 bg-dark">
          <strong className="flt">ETH</strong>

        </Link>
        <Link to="/gbp" className="nav-link text-info btn btn-light marg ml-1 bg-dark">
          <strong className="flt">GBP</strong>

        </Link>
        <Link to="/ils" className="nav-link text-info btn btn-light marg ml-1 bg-dark">
          <strong className="flt">ILS</strong>

        </Link>
        <Link to="/jpy" className="nav-link text-info btn btn-light marg ml-1 bg-dark">
          <strong className="flt">JPY</strong>

        </Link>
        <Link to="/ltc" className="nav-link text-info btn btn-light marg ml-1 bg-dark">
          <strong className="flt">LTC</strong>

        </Link>
        <Link to="/xrp" className="nav-link text-info btn btn-light marg ml-1 bg-dark">
          <strong className="flt">XRP</strong>

        </Link>
      </div>
    </div>
  );
};

export default Nav;
