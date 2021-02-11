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
            <React.Fragment>
                <div className="portfolio-owner">Avicia Fernandes</div>
                <nav className="nav-header">
                    <div>
                        <Link to="/">Home</Link>
                    </div>
                    <div>
                        <Link to="/about">About</Link>
                    </div>
                    <div>
                        <Link to="/social">Social</Link>
                    </div>
                    <div>
                        <Link to="/contact">Contact</Link>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default Header;