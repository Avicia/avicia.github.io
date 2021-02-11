import React, { Component } from "react";
import { FlexContainer, FlexPicsColumn, FlexOptions } from "../../Styles";
import wiseBrains from "../../assets/100daysOfSketch/Wise-brains.png";
import fire from "../../assets/100daysOfSketch/Fire2.png";
import './style.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    importAll = (r) => {
        return r.keys().map(r);
    }
    render() {
        const img = this.importAll(require.context('../../assets/100daysOfSketch/', false, /\.(png|jpe?g|svg)$/));
        console.log(img);
        const divCss = {
            'paddingBottom': '13px',
        }
        const imagesCss = {
            'boxShadow': '0px 4px 8px -4px black',
            'WebkitAnimationName': 'fadeIn',
            'animationName': 'fadeIn',
            'WebkitAnimationDuration': '3s',
            'animationDuration': '3s',
        }
        const colLength = Math.round(img.length / 4)

        return (
            <React.Fragment>
                <FlexOptions>
                    <div style={{ textDecoration: 'underline', cursor: 'pointer' }}>100daysOfSketching</div>
                    <div style={{ cursor: 'pointer' }}>Inktober2020</div>
                </FlexOptions>
                <FlexContainer className="cus_cursor">
                    < FlexPicsColumn >
                        {
                            img.slice(colLength * 0, colLength * 1).map((v, i) => {
                                return (
                                    <div key={i} style={divCss}>
                                        <img src={v.default} width="100%" alt="image1" style={imagesCss} />
                                    </div>
                                )
                            })
                        }
                    </FlexPicsColumn>
                    <FlexPicsColumn>
                        {
                            img.slice(colLength * 1, colLength * 2).map((v, i) => {
                                return (
                                    <div key={i} style={divCss}>
                                        <img src={v.default} width="100%" alt="image1" style={imagesCss} />
                                    </div>
                                )
                            })
                        }
                    </FlexPicsColumn>
                    <FlexPicsColumn>
                        {
                            img.slice(colLength * 2, colLength * 3).map((v, i) => {
                                return (
                                    <div key={i} style={divCss}>
                                        <img src={v.default} width="100%" alt="image1" style={imagesCss} />
                                    </div>
                                )
                            })
                        }
                    </FlexPicsColumn>
                    <FlexPicsColumn>
                        {
                            img.slice(colLength * 3, colLength * 4).map((v, i) => {
                                return (
                                    <div key={i} style={divCss}>
                                        <img src={v.default} width="100%" alt="image1" style={imagesCss} />
                                    </div>
                                )
                            })
                        }
                    </FlexPicsColumn>
                </FlexContainer>
            </React.Fragment>
        );
    }
}

export default Home;