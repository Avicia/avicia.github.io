import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="nav-header">
                <Link to="/" className="nav-title">
                    Avicia Fernandes
                </Link>
                <Link to="/" className="nav-link">
                    Porfolio
                </Link>
                <Link to="/sketch" className="nav-link">
                    Sketch
                </Link>
                <Link to="/commission" className="nav-link">
                    Commissions
                </Link>
                <Link to="/about" className="nav-link">
                    About
                </Link>
            </div >
        );
    }
}

export default Header;