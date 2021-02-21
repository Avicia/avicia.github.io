import { Component } from "react";
import { Link } from "react-router-dom";
import { FlexCol, FlexContainerCOl, FlexRow } from "../Styles";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <FlexContainerCOl style={{ background: 'lightgrey', padding: '4%' }}>
                <FlexRow style={{ justifyContent: "center" }}>
                    <FlexCol style={{ maxWidth: 200, padding: 20, }}>
                        ICON &nbsp;&nbsp;&nbsp;&nbsp;ICON
                    </FlexCol>
                </FlexRow>
                <FlexRow style={{ justifyContent: "center" }}>
                    <Link to="/" className="nav-link" style={{ flex: 'none' }}>
                        Porfolio
                    </Link>
                    <Link to="/sketch" className="nav-link" style={{ flex: 'none' }}>
                        Sketch
                    </Link>
                    <Link to="/commission" className="nav-link" style={{ flex: 'none' }}>
                        Commissions
                    </Link>
                    <Link to="/about" className="nav-link" style={{ flex: 'none' }}>
                        About
                    </Link>
                </FlexRow>
            </FlexContainerCOl>
        );
    }
}

export default Footer;