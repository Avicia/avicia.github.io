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
                <Link to="/" className="nav-title onhover-black">
                    Avicia Fernandes
                </Link>
                <Link to="/portfolio" className="nav-link">
                    Portfolio
                </Link>
                <Link to="/sketch" className="nav-link">
                    SketchBook
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