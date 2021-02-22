import { Component } from "react";
import { Link } from "react-router-dom";
import { FlexCol, FlexContainerCOl, FlexRow } from "../Styles";
import { FaBeer } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { IconContext } from "react-icons/lib";
import './colors.css'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <FlexContainerCOl className="color" style={{ background: 'black', padding: '2.5%', color: 'white' }}>
                <FlexRow style={{ justifyContent: "center" }}>
                    <FlexCol style={{ maxWidth: 200, padding: 20, color: 'white' }}>
                        <RiInstagramFill size={25} style={{ color: 'white' }} className="onhover-red" />&nbsp;&nbsp;&nbsp;&nbsp; <RiInstagramFill size={25} className="color-white" />
                    </FlexCol>
                </FlexRow>
                <FlexRow style={{ justifyContent: "center", marginBottom: 15 }}>
                    <Link to="/portfolio" className="nav-link onhover-red" style={{ flex: 'none', color: 'white' }}>
                        Portfolio
                    </Link>
                    <Link to="/sketch" className="nav-link onhover-red" style={{ flex: 'none', color: 'white' }}>
                        SketchBook
                    </Link>
                    <Link to="/commission" className="nav-link onhover-red" style={{ flex: 'none', color: 'white' }}>
                        Commissions
                    </Link>
                    <Link to="/about" className="nav-link onhover-red" style={{ flex: 'none', color: 'white' }}>
                        About
                    </Link>
                </FlexRow>
                <FlexRow>
                    <Link className="nav-link onhover-red" style={{ color: 'white' }}>All rights reserved ©️ Jessica Karpishin</Link>
                </FlexRow>
            </FlexContainerCOl>
        );
    }
}

export default Footer;