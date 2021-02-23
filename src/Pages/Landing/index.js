import { Component } from "react";
import { Link } from "react-router-dom";
import { FlexCol, FlexContainer, FlexRow } from "../../Styles";
import JetPack from '../../assets/100daysOfSketch/Jetpack.png';
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
                        minWidth: 569,
                        margin: '18%',
                    }}>
                        <div className="landing_title">AVICIA FERNANDES</div>
                        <img
                            src={JetPack}
                            width="403" height="550" className="landing_img" />
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