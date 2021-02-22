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
        const BRs = this.importAll(require.context('../../assets/BaskinRobbins/', false, /\.(png|jpe?g|svg)$/));
        const CDs = this.importAll(require.context('../../assets/CharacterDesign/', false, /\.(png|jpe?g|svg)$/));
        const OAF = this.importAll(require.context('../../assets/OtakuAF/', false, /\.(png|jpe?g|svg)$/));
        const Sticker = this.importAll(require.context('../../assets/Stickers/', false, /\.(png|jpe?g|svg)$/));
        const boxNavs = {
            minWidth: '25%',
            margin: '1%',
            flexShrink: 1,
            textAlign: 'center',
            position: 'relative'
        }
        const card_caption = {
            textAlign: 'center',
            height: 'auto',
            padding: '4px',
            flex: 1,
            flexDirection: 'row',
            color: 'black',
            textTransform: 'uppercase',
            fontFamily: 'impact',
            fontSize: 30,
            lineHeight: 2,
            position: 'absolute',
            top: '40%',
            width: '100%',
            color: 'white'
        }
        const card_body = {
            position: 'relative',
            height: '360px',
            width: '360px',
            flexDirection: 'row',
            flex: 9,
            backgroundImage: 'url(https://static.wixstatic.com/media/21b326_846aab5eb34e4b6a9aa45328bb846ee1~mv2_d_5400_3541_s_4_2.jpg/v1/fill/w_471,h_309,fp_0.50_0.50,q_90/21b326_846aab5eb34e4b6a9aa45328bb846ee1~mv2_d_5400_3541_s_4_2.webp)',
            backgroundSize: 'cover',
        }
        const setFolder = (folder) => {
            switch (folder) {
                case 'HDOS':
                    this.setState({ imageList: HDOS })
                    this.setState({ colLength: 3 })
                    break;
                case 'IN2020':
                    this.setState({ imageList: IN2020 })
                    this.setState({ colLength: 3 })
                    break;
                case 'BRs':
                    this.setState({ imageList: BRs })
                    this.setState({ colLength: 3 })
                    break;
                case 'OAF':
                    this.setState({ imageList: OAF })
                    this.setState({ colLength: 3 })
                    break;
                case 'Sticker':
                    this.setState({ imageList: Sticker })
                    this.setState({ colLength: 3 })
                    break;
                case 'CDs':
                    this.setState({ imageList: CDs })
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
                    <FlexCol style={boxNavs} onClick={() => setFolder('BRs')}>
                        <div className="onView" style={card_body}></div>
                        <div className="onhover-red" style={card_caption}>Baskin-Robbins</div>
                    </FlexCol>
                    <FlexCol style={boxNavs} onClick={() => setFolder('HDOS')}>
                        <div className="onView" style={card_body}></div>
                        <div className="onhover-red onView" style={card_caption}>100 Days of Sketching</div>
                    </FlexCol>
                    <FlexCol style={boxNavs} onClick={() => { setFolder('IN2020') }}>
                        <div className="onView" style={card_body}></div>
                        <div className="onhover-red" style={card_caption}>Inktober 2020</div>
                    </FlexCol>
                    <FlexCol style={boxNavs} onClick={() => setFolder('CDs')}>
                        <div className="onView" style={card_body}></div>
                        <div className="onhover-red" style={card_caption}>Character Design</div>
                    </FlexCol>
                    <FlexCol style={boxNavs} onClick={() => setFolder('Sticker')}>
                        <div className="onView" style={card_body}></div>
                        <div className="onhover-red" style={card_caption}>Stickers</div>
                    </FlexCol>
                    <FlexCol style={boxNavs} onClick={() => setFolder('OAF')}>
                        <div className="onView" style={card_body}></div>
                        <div className="onhover-red" style={card_caption}>OtakuAF</div>
                    </FlexCol>

                </FlexRow>
                <ImageGallery imageList={this.state.imageList} colLength={this.state.colLength} />
            </MainContainer >
        );
    }
}


export default Home;