import React, { Component } from "react";
import { FlexContainer, FlexPicsColumn, FlexOptions } from "../../Styles";
import wiseBrains from "../../assets/100daysOfSketch/Wise-brains.png";
import fire from "../../assets/100daysOfSketch/Fire2.png";

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
        const imagesCss = {
            'padding-bottom': '13px'
        }
        const colLength = Math.round(img.length / 4)

        return (
            <React.Fragment>
                <FlexOptions>
                    <div style={{ textDecoration: 'underline', cursor: 'pointer' }}>100daysOfSketching</div>
                    <div style={{ cursor: 'pointer' }}>Inktober2020</div>
                </FlexOptions>
                <FlexContainer>
                    < FlexPicsColumn >
                        {
                            img.slice(colLength * 0, colLength * 1).map((v) => {
                                return (
                                    <div>
                                        <img src={v.default} width="100%" alt="image1" style={imagesCss} />
                                    </div>
                                )
                            })
                        }
                    </FlexPicsColumn>
                    <FlexPicsColumn>
                        {
                            img.slice(colLength * 1, colLength * 2).map((v) => {
                                return (
                                    <div>
                                        <img src={v.default} width="100%" alt="image1" style={imagesCss} />
                                    </div>
                                )
                            })
                        }
                    </FlexPicsColumn>
                    <FlexPicsColumn>
                        {
                            img.slice(colLength * 2, colLength * 3).map((v) => {
                                return (
                                    <div>
                                        <img src={v.default} width="100%" alt="image1" style={imagesCss} />
                                    </div>
                                )
                            })
                        }
                    </FlexPicsColumn>
                    <FlexPicsColumn>
                        {
                            img.slice(colLength * 3, colLength * 4).map((v) => {
                                return (
                                    <div>
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