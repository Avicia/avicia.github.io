import React, { Component } from "react";
import { FlexContainer, FlexPicsColumn, FlexRow, FlexCol, MainContainer, PageTitle } from "../../Styles";
import wiseBrains from "../../assets/100daysOfSketch/Wise-brains.png";
import fire from "../../assets/100daysOfSketch/Fire2.png";
import './style.css';
import ImageGallery from "../../Component/ImageGallery";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageList: [],
            colLength: 4
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
            backgroundImage: 'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F10lja23.files.wordpress.com%2F2014%2F09%2Fcubism-1.jpg&f=1&nofb=1)',
            backgroundSize: 'contain',
            // filter: 'blur(1px)',
        }
        const setFolder = (folder) => {
            switch (folder) {
                case 'HDOS':
                    this.setState({ imageList: HDOS })
                    this.setState({ colLength: 4 })
                    break;
                case 'IN2020':
                    this.setState({ imageList: IN2020 })
                    this.setState({ colLength: 3 })
                    break;
                default:
                    alert("Error!")
            }
            window.scroll({
                top: 500,
                behavior: 'smooth' 
            });
        }
        return (
            <MainContainer>
                <PageTitle> Avicia Fernandes is an illustrator living in Mumbai, India.</PageTitle>
                <FlexRow>
                    <FlexCol className=" " style={boxNavs} onClick={() => setFolder('HDOS')}>
                        <div style={card_body}></div>
                        <div style={card_caption}>100daysOfSketching</div>
                    </FlexCol>
                    <FlexCol className="onhover" style={boxNavs} onClick={() => { setFolder('IN2020') }}>
                        <div style={card_body}></div>
                        <div style={card_caption}>Inktober2020</div>
                    </FlexCol>
                    <FlexCol className="onhover" style={boxNavs} onClick={() => setFolder('HDOS')}>
                        <div style={card_body}></div>
                        <div style={card_caption}>Inktober2020</div>
                    </FlexCol>
                    <FlexCol className="onhover" style={boxNavs} onClick={() => setFolder('IN2020')}>
                        <div style={card_body}></div>
                        <div style={card_caption}>Inktober2020</div>
                    </FlexCol>
                    <FlexCol className="onhover" style={boxNavs} onClick={() => setFolder('IN2020')}>
                        <div style={card_body}></div>
                        <div style={card_caption}>Inktober2020</div>
                    </FlexCol>
                    <FlexCol className="onhover" style={boxNavs} onClick={() => setFolder('IN2020')}>
                        <div style={card_body}></div>
                        <div style={card_caption}>Inktober2020</div>
                    </FlexCol>

                </FlexRow>
                <ImageGallery imageList={this.state.imageList} colLength={this.state.colLength} />
            </MainContainer >
        );
    }
}


export default Home;