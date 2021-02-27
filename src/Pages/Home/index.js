import React, { Component } from "react";
import { FlexRow, FlexCol, MainContainer, PageTitle, BackArrow } from "../../Styles";
import VisualIllustation_THUMBNAIL from "../../assets/Thumbnails/VisualIllustation_THUMBNAIL.png";
import BaskinRobbins from "../../assets/Thumbnails/BaskinRobbins.webp";
import BaskinRobbins_Thumnail from "../../assets/Thumbnails/BaskinRobbins_Thumnail.png";
import CharacterDesign_THUMBNAIL from "../../assets/Thumbnails/CharacterDesign_THUMBNAIL.png";
import INKTOBER_THUMBNAIL from "../../assets/Thumbnails/INKTOBER_THUMBNAIL.png";
import Posters_THUMBNAIL from "../../assets/Thumbnails/Posters_THUMBNAIL.png";
import OtakuAF_Thumbnail from "../../assets/Thumbnails/OtakuAF_Thumbnail.png";
import { MdKeyboardArrowLeft } from "react-icons/md";
import ImageGallery from "../../Component/ImageGallery";
import './style.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageList: [],
            colLength: 4,
            showGallery: false
        }
    }
    importAll = (r) => {
        return r.keys().map(r);
    }
    componentDidMount() {

    }
    render() {
        const IN2020 = this.importAll(require.context('../../assets/Inktober2020/', false, /\.(png|jpe?g|svg)$/));
        const VI = this.importAll(require.context('../../assets/Visual_Illustrations/', false, /\.(png|jpe?g|svg)$/));
        const BRs = this.importAll(require.context('../../assets/BaskinRobbins/', false, /\.(png|jpe?g|svg)$/));
        const CDs = this.importAll(require.context('../../assets/CharacterDesign/', false, /\.(png|jpe?g|svg)$/));
        const OAF = this.importAll(require.context('../../assets/OtakuAF/', false, /\.(png|jpe?g|svg)$/));
        const Poster = this.importAll(require.context('../../assets/Posters/', false, /\.(png|jpe?g|svg)$/));
        const boxNavs = {
            minWidth: '25%',
            margin: '1%',
            flexShrink: 1,
            textAlign: 'center',
            position: 'relative',
            overflow: "hidden"
        }
        const card_caption = {
            pointerEvents: "none",
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
            color: 'white',
            textShadow: '4px 3px black'
        }
        const card_body1 = {
            position: 'relative',
            height: '360px',
            width: '360px',
            flexDirection: 'row',
            flex: 9,
            backgroundImage: `url(${BaskinRobbins})`,
            backgroundSize: 'cover',
            transition: '0.4s ease-in',
        }
        const card_body2 = {
            position: 'relative',
            height: '360px',
            width: '360px',
            flexDirection: 'row',
            flex: 9,
            backgroundImage: `url(${VisualIllustation_THUMBNAIL})`,
            backgroundSize: 'cover',
            transition: '0.4s ease-in',
        }
        const card_body3 = {
            position: 'relative',
            height: '360px',
            width: '360px',
            flexDirection: 'row',
            flex: 9,
            backgroundImage: `url(${INKTOBER_THUMBNAIL})`,
            backgroundSize: 'cover',
            transition: '0.4s ease-in',
        }
        const card_body4 = {
            position: 'relative',
            height: '360px',
            width: '360px',
            flexDirection: 'row',
            flex: 9,
            backgroundImage: `url(${CharacterDesign_THUMBNAIL})`,
            backgroundSize: 'cover',
            transition: '0.4s ease-in',
        }
        const card_body5 = {
            position: 'relative',
            height: '360px',
            width: '360px',
            flexDirection: 'row',
            flex: 9,
            backgroundImage: `url(${Posters_THUMBNAIL})`,
            backgroundSize: 'cover',
            transition: '0.4s ease-in',
        }
        const card_body6 = {
            position: 'relative',
            height: '360px',
            width: '360px',
            flexDirection: 'row',
            flex: 9,
            backgroundImage: `url(${OtakuAF_Thumbnail})`,
            backgroundSize: 'cover',
            transition: '0.4s ease-in',
        }
        const setFolder = (folder) => {
            this.setState({ showGallery: !this.state.showGallery })
            switch (folder) {
                case 'VI':
                    this.setState({ imageList: VI })
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
                    this.setState({ colLength: 1 })
                    break;
                case 'Poster':
                    this.setState({ imageList: Poster })
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
                top: 200,
                behavior: 'smooth'
            });
        }
        return (
            <MainContainer>
                {
                    this.state.showGallery ?
                        <BackArrow>
                            <MdKeyboardArrowLeft size={50} style={{ fontWeight: 'bolder' }} onClick={() => this.setState({ showGallery: !this.state.showGallery })} />
                        </BackArrow> : null
                }
                <FlexRow style={{ display: (this.state.showGallery ? "none" : "flex") }}>
                    <div style={{ width: '100%' }}>
                        <PageTitle> Avicia Fernandes is an illustrator living in Mumbai, India.</PageTitle>
                    </div>
                    <FlexCol style={boxNavs} onClick={() => setFolder('BRs')}>
                        <div className="onView" style={card_body1}></div>
                        <div className="onhover-red" style={card_caption}>Baskin-Robbins</div>
                    </FlexCol>
                    <FlexCol style={boxNavs} onClick={() => setFolder('VI')}>
                        <div className="onView" style={card_body2}></div>
                        <div className="onhover-red" style={card_caption}>Visual Illustrations</div>
                    </FlexCol>
                    <FlexCol style={boxNavs} onClick={() => { setFolder('IN2020') }}>
                        <div className="onView" style={card_body3}></div>
                        <div className="onhover-red" style={card_caption}>Inktober 2020</div>
                    </FlexCol>
                    <FlexCol style={boxNavs} onClick={() => setFolder('CDs')}>
                        <div className="onView" style={card_body4}></div>
                        <div className="onhover-red" style={card_caption}>Character Design</div>
                    </FlexCol>
                    <FlexCol style={boxNavs} onClick={() => setFolder('OAF')}>
                        <div className="onView" style={card_body6}></div>
                        <div className="onhover-red" style={card_caption}>OtakuAF</div>
                    </FlexCol>
                    <FlexCol style={boxNavs} onClick={() => setFolder('Poster')}>
                        <div className="onView" style={card_body5}></div>
                        <div className="onhover-red" style={card_caption}>Posters</div>
                    </FlexCol>
                </FlexRow>
                <ImageGallery
                    imageList={this.state.imageList}
                    colLength={this.state.colLength}
                    showGallery={this.state.showGallery}

                />
            </MainContainer >
        );
    }
}

export default Home;