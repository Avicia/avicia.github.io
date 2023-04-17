import { Component } from "react";
import { Link } from "react-router-dom";
import { FlexCol, FlexContainerCOl, FlexRow } from "../Styles";
import { RiInstagramFill, RiFacebookFill, RiBehanceFill, RiGoogleFill, RiTwitterFill, RiLinkedinFill } from 'react-icons/ri';
import './colors.css'
import { MdKeyboardArrowUp } from "react-icons/md";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    redirectTo(link) {
        window.open(link, '_blank')
    }
    render() {
        return (
            <FlexContainerCOl className="color" style={{ marginTop: 150, background: 'black', padding: '2.5%', color: 'white' }}>
                <FlexRow style={{ justifyContent: "center" }}>
                    <FlexCol style={{ maxWidth: 50 }} className="onhover-bounce">
                        <MdKeyboardArrowUp size={55} style={{ color: 'white', textAlign: 'center', fontWeight: 'bolder' }} onClick={() => window.scroll({ top: 0, behavior: "smooth" })} />
                    </FlexCol>
                </FlexRow>
                <FlexRow style={{ justifyContent: "center" }}>
                    <FlexCol style={{ maxWidth: 330, padding: 20, color: 'white', justifyContent: 'center' }}>
                        <RiInstagramFill size={25} className="icon-circle onhover-bounce" onClick={() => this.redirectTo('https://www.instagram.com/aviciaaa/')} />
                        &nbsp;&nbsp;&nbsp;&nbsp; <RiFacebookFill size={25} className="icon-circle onhover-bounce" onClick={() => this.redirectTo('https://www.facebook.com/fernandesavicia/')} />
                        &nbsp;&nbsp;&nbsp;&nbsp; <RiLinkedinFill size={25} className="icon-circle onhover-bounce" onClick={() => this.redirectTo('https://www.linkedin.com/in/aviciafernandes/')} />
                        &nbsp;&nbsp;&nbsp;&nbsp; <RiTwitterFill size={25} className="icon-circle onhover-bounce" onClick={() => this.redirectTo('https://twitter.com/FernandesAvicia')} />
                        &nbsp;&nbsp;&nbsp;&nbsp; <RiBehanceFill size={25} className="icon-circle onhover-bounce" onClick={() => this.redirectTo('https://www.behance.net/AviciaFernandes')} />
                        &nbsp;&nbsp;&nbsp;&nbsp; <RiGoogleFill size={25} className="icon-circle onhover-bounce" onClick={() => this.redirectTo('mailto:aviciafernandes@gmail.com')} />
                    </FlexCol>
                </FlexRow>
                <FlexRow style={{ justifyContent: "center", marginBottom: 45 }}>
                    <Link to="/portfolio" className="nav-link onhover-red" style={{ flex: 'none', color: 'white' }}>
                        Portfolio
                    </Link>
                    <Link to="/sketch" className="nav-link onhover-red" style={{ flex: 'none', color: 'white' }}>
                        SketchBook
                    </Link>
                    {/* <Link to="/commission" className="nav-link onhover-red" style={{ flex: 'none', color: 'white' }}>
                        Commissions
                    </Link> */}
                    <Link to="/about" className="nav-link onhover-red" style={{ flex: 'none', color: 'white' }}>
                        About
                    </Link>
                </FlexRow>
                <FlexRow>
                    <Link className="nav-link onhover-red" style={{ marginRight: 15, color: 'white', fontSize: 10, marginTop: 35 }}>All rights reserved ©️ Avicia Fernandes</Link>
                </FlexRow>
            </FlexContainerCOl>
        );
    }
}

export default Footer;