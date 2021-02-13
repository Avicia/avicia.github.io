import React, { Component } from "react";
import { FlexContainer, FlexPicsColumn, FlexRow, FlexCol, MainContainer } from "../../Styles";
import wiseBrains from "../../assets/100daysOfSketch/Wise-brains.png";
import fire from "../../assets/100daysOfSketch/Fire2.png";
import './style.css';
import ImageGallery from "../../Component/ImageGallery";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageList: []
        }
    }
    importAll = (r) => {
        return r.keys().map(r);
    }
    componentDidMount() {

    }
    render() {
        const IN2020 = this.importAll(require.context('../../assets/Inktober2020/', false, /\.(png|jpe?g|svg)$/));
        const HDOS = this.importAll(require.context('../../assets/100daysOfSketch/', false, /\.(png|jpe?g|svg)$/));
        const boxNavs = {
            minWidth: '25%',
            margin: '1%',
            flexShrink: 1,
            textAlign: 'center',
            border: '1px solid #ba9f9f',
            borderRadius: '3px',
            // padding: '82px 60px',
        }
        const card_caption = {
            height: 'auto',
            padding: '4px',
            flex: 1,
            flexDirection: 'row',
            background: '#9e9e9e',
            color: 'white',
        }
        const card_body = {
            height: '23vh',
            flexDirection: 'row',
            flex: 9,
        }
        return (
            <MainContainer>
                <h2 className="text-center">CATEGORY</h2>
                <FlexRow>
                    <FlexCol className="onhover " style={boxNavs} onClick={() => this.setState({ imageList: HDOS })}>
                        <div style={card_body}></div>
                        <div style={card_caption}>100daysOfSketching</div>
                    </FlexCol>
                    <FlexCol className="onhover" style={boxNavs} onClick={() => { this.setState({ imageList: IN2020 }) }}>
                        <div style={card_body}></div>
                        <div style={card_caption}>Inktober2020</div>
                    </FlexCol>
                    <FlexCol className="onhover" style={boxNavs} onClick={() => this.setState({ imageList: HDOS })}>
                        <div style={card_body}></div>
                        <div style={card_caption}>Inktober2020</div>
                    </FlexCol>
                    <FlexCol className="onhover" style={boxNavs} onClick={() => this.setState({ imageList: IN2020 })}>
                        <div style={card_body}></div>
                        <div style={card_caption}>Inktober2020</div>
                    </FlexCol>
                    <FlexCol className="onhover" style={boxNavs} onClick={() => this.setState({ imageList: IN2020 })}>
                        <div style={card_body}></div>
                        <div style={card_caption}>Inktober2020</div>
                    </FlexCol>
                    <FlexCol className="onhover" style={boxNavs} onClick={() => this.setState({ imageList: IN2020 })}>
                        <div style={card_body}></div>
                        <div style={card_caption}>Inktober2020</div>
                    </FlexCol>

                </FlexRow>
                <ImageGallery imageList={this.state.imageList} colLength="4" />
            </MainContainer >
        );
    }
}


export default Home;