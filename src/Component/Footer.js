import { Component } from "react";
import { Link } from "react-router-dom";
import { FlexCol, FlexContainerCOl, FlexRow } from "../Styles";
import { RiInstagramLine, RiFacebookLine, RiLinkedinLine, RiGoogleLine, RiTwitterLine, RiPinterestLine, RiBehanceLine } from 'react-icons/ri';
import './colors.css'

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
                    <FlexCol style={{ maxWidth: 240, padding: 20, color: 'white', justifyContent: 'center' }}>
                        <RiInstagramLine size={25} className="onhover-red" onClick={() => this.redirectTo('https://www.instagram.com/aviciaaa/')} />
                        &nbsp;&nbsp;&nbsp;&nbsp; <RiFacebookLine size={25} className="onhover-red" onClick={() => this.redirectTo('https://www.facebook.com/fernandesavicia/')} />
                        &nbsp;&nbsp;&nbsp;&nbsp; <RiLinkedinLine size={25} className="onhover-red" onClick={() => this.redirectTo('https://www.linkedin.com/in/aviciafernandes/')} />
                        &nbsp;&nbsp;&nbsp;&nbsp; <RiTwitterLine size={25} className="onhover-red" onClick={() => this.redirectTo('https://twitter.com/FernandesAvicia')} />
                        &nbsp;&nbsp;&nbsp;&nbsp; <RiBehanceLine size={25} className="onhover-red" onClick={() => this.redirectTo('https://www.behance.net/AviciaFernandes')} />
                        &nbsp;&nbsp;&nbsp;&nbsp; <RiGoogleLine size={25} className="onhover-red" onClick={() => this.redirectTo('mailto:fernandesavicia@gmail.com')} />
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
                    <Link className="nav-link onhover-red" style={{ color: 'white', fontSize: 10, marginTop: 35 }}>All rights reserved ©️ Avicia Fernandes</Link>
                </FlexRow>
            </FlexContainerCOl>
        );
    }
}

export default Footer;