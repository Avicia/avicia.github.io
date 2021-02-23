import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showNavigationBar: false
        }
    }
    render() {

        return (
            <div className="nav-header">
                {
                    this.state.showNavigationBar ?
                        <div className="navigationDrawer">
                            <div>
                                <div className="nav-title onhover-black" onClick={(e) => {
                                    e.preventDefault()
                                    this.setState({ showNavigationBar: false })
                                }}>
                                    Avicia Fernandes
                                    &nbsp;&nbsp;
                                    <MdClose
                                        size={40} color={'red'} style={{ color: 'red' }}
                                        onClick={() =>
                                            this.setState({ showNavigationBar: false })
                                        }
                                    />
                                </div>
                            </div>
                            <div>
                                <Link to="/portfolio" className="nav-link">
                                    Portfolio
                                </Link>
                            </div>
                            <div>
                                <Link to="/sketch" className="nav-link">
                                    SketchBook
                                </Link>
                            </div>
                            <div>
                                <Link to="/commission" className="nav-link">
                                    Commissions
                                </Link>
                            </div>
                            <div>
                                <Link to="/about" className="nav-link">
                                    About
                            </Link>
                            </div>
                        </div>
                        : null
                }

                <Link className="nav-title onhover-black" onClick={(e) => {
                    e.preventDefault()
                    this.setState({ showNavigationBar: true })
                }}>
                    Avicia Fernandes
                    &nbsp;&nbsp;
                    <GiHamburgerMenu
                        size={40} color={'red'} style={{ color: 'red' }}
                    />
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