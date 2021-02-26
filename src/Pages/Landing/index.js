import { Component } from "react";
import { Link } from "react-router-dom";
import { FlexCol, FlexContainer, FlexRow } from "../../Styles";
import JetPack from '../../assets/Thumbnails/Landing_Thunmbnail.png';
import "./style.css";

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <FlexContainer>
                <FlexRow>
                    <FlexCol style={{
                        minWidth: 430,
                        margin: '10%',
                        paddingTop: 2,
                        paddingBottom: 2,
                        borderTopWidth: 1,
                        borderBottomWidth: 1,
                        borderTopStyle: 'solid',
                        borderBottomStyle: 'solid',
                        borderTopColor: '#cbf1fc',
                        borderBottomColor: '#cbf1fc',
                    }}>
                        <div className="landing_title">AVICIA FERNANDES</div>
                        <img
                            src={JetPack}
                            className="landing_img" />
                        <div className="landing_title2">Illustrator</div>
                        <div className="landing_block">
                            <Link to="/portfolio" className="landing_button">Enter</Link>
                        </div>
                    </FlexCol>
                </FlexRow>
            </FlexContainer>
        );
    }
}


export default LandingPage;