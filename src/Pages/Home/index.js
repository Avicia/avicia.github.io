import React, { Component } from "react";
import {
  FlexRow,
  FlexCol,
  MainContainer,
  PageTitle,
  BackArrow,
  Divider,
} from "../../Styles";
import VisualIllustation_THUMBNAIL from "../../assets/Thumbnails/VisualIllustation_THUMBNAIL.png";
import BaskinRobbins from "../../assets/Thumbnails/BaskinRobbins.webp";
import LOGOS_THUMBNAIL from "../../assets/Thumbnails/Logos_Thumbnail.jpg";
import CharacterDesign_THUMBNAIL from "../../assets/Thumbnails/CharacterDesign_THUMBNAIL.png";
import INKTOBER_THUMBNAIL from "../../assets/Thumbnails/INKTOBER_THUMBNAIL.png";
import Posters_THUMBNAIL from "../../assets/Thumbnails/Posters_THUMBNAIL.png";
import OtakuAF_Thumbnail from "../../assets/Thumbnails/OtakuAF_Thumbnail.png";
import ImageGallery from "../../Component/ImageGallery";
import "./style.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageList: [],
      colLength: 4,
      showGallery: false,
      galleryDesc: {
        title: "",
        date: "",
        desc: "",
      },
    };
  }
  importAll = (r) => {
    return r.keys().map(r);
  };
  componentDidMount() {}
  render() {
    const LOGOS = this.importAll(
      require.context(
        "../../assets/Logos/All/",
        false,
        /\.(webp|png|jpe?g|svg)$/
      )
    );
    const IN2020 = this.importAll(
      require.context(
        "../../assets/Inktober2020/",
        false,
        /\.(webp|png|jpe?g|svg)$/
      )
    );
    const VI = this.importAll(
      require.context(
        "../../assets/Visual_Illustrations/",
        false,
        /\.(webp|png|jpe?g|svg)$/
      )
    );
    const BRs = this.importAll(
      require.context(
        "../../assets/BaskinRobbins/",
        false,
        /\.(webp|png|jpe?g|svg)$/
      )
    );
    const CDs = this.importAll(
      require.context(
        "../../assets/CharacterDesign/",
        false,
        /\.(webp|png|jpe?g|svg)$/
      )
    );
    const OAF = this.importAll(
      require.context("../../assets/OtakuAF/", false, /\.(webp|png|jpe?g|svg)$/)
    );
    const Poster = this.importAll(
      require.context("../../assets/Posters/", false, /\.(webp|png|jpe?g|svg)$/)
    );
    const boxNavs = {
      minWidth: "380px",
      margin: "1%",
      flexShrink: 0,
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    };
    const card_caption = {
      pointerEvents: "none",
      textAlign: "center",
      height: "auto",
      padding: "4px",
      flex: 1,
      flexDirection: "row",
      color: "black",
      textTransform: "uppercase",
      fontFamily: "impact",
      fontSize: 30,
      lineHeight: 2,
      position: "absolute",
      top: "40%",
      width: "100%",
      // color: 'white',
      // textShadow: '4px 3px black'
    };
    const card_body0 = {
      position: "relative",
      height: "360px",
      width: "auto",
      flexDirection: "row",
      flex: 9,
      backgroundImage: `url(${LOGOS_THUMBNAIL})`,
      backgroundSize: "cover",
      transition: "0.4s ease-in",
    };
    const card_body1 = {
      position: "relative",
      height: "360px",
      width: "auto",
      flexDirection: "row",
      flex: 9,
      backgroundImage: `url(${BaskinRobbins})`,
      backgroundSize: "cover",
      transition: "0.4s ease-in",
    };
    const card_body2 = {
      position: "relative",
      height: "360px",
      width: "auto",
      flexDirection: "row",
      flex: 9,
      backgroundImage: `url(${VisualIllustation_THUMBNAIL})`,
      backgroundSize: "cover",
      transition: "0.4s ease-in",
    };
    const card_body3 = {
      position: "relative",
      height: "360px",
      width: "auto",
      flexDirection: "row",
      flex: 9,
      backgroundImage: `url(${INKTOBER_THUMBNAIL})`,
      backgroundSize: "cover",
      transition: "0.4s ease-in",
    };
    const card_body4 = {
      position: "relative",
      height: "360px",
      width: "auto",
      flexDirection: "row",
      flex: 9,
      backgroundImage: `url(${CharacterDesign_THUMBNAIL})`,
      backgroundSize: "cover",
      transition: "0.4s ease-in",
    };
    const card_body5 = {
      position: "relative",
      height: "360px",
      width: "auto",
      flexDirection: "row",
      flex: 9,
      backgroundImage: `url(${Posters_THUMBNAIL})`,
      backgroundSize: "cover",
      transition: "0.4s ease-in",
    };
    const card_body6 = {
      position: "relative",
      height: "360px",
      width: "auto",
      flexDirection: "row",
      flex: 9,
      backgroundImage: `url(${OtakuAF_Thumbnail})`,
      backgroundSize: "cover",
      transition: "0.4s ease-in",
    };
    const card_body7 = {
      position: "relative",
      height: "360px",
      width: "auto",
      flexDirection: "row",
      flex: 9,
      backgroundImage: `url(${OtakuAF_Thumbnail})`,
      backgroundSize: "cover",
      transition: "0.4s ease-in",
    };
    const setFolder = (folder) => {
      this.setState({ showGallery: !this.state.showGallery });
      switch (folder) {
        case "LOGOS":
          this.setState({ imageList: LOGOS });
          this.setState({ colLength: 3 });
          this.setState({
            galleryDesc: {
              title: "",
              date: "",
              desc: ``,
            },
          });
          break;
        case "VI":
          this.setState({ imageList: VI });
          this.setState({ colLength: 3 });
          this.setState({
            galleryDesc: {
              title: "",
              date: "",
              desc: ``,
            },
          });
          break;
        case "IN2020":
          this.setState({ imageList: IN2020 });
          this.setState({ colLength: 3 });
          this.setState({
            galleryDesc: {
              title: "",
              date: "",
              desc: ``,
            },
          });
          break;
        case "BRs":
          this.setState({ imageList: BRs });
          this.setState({ colLength: 2 });
          this.setState({
            galleryDesc: {
              title: "Baskin-Robbins",
              date: "August 2020 - December 2020",
              desc: `
                            Baskin-Robbins is an American multinational chain of ice cream and cake specialty shop restaurants owned by Inspire Brands.
                            The brief was to revamp the Baskin-Robbins logo by integrating the ice cream flavours into the creatively hidden '31' of the well-known brand.
                            The purpose of the revamp was to capture the taste and texture of each ice cream flavour into the logo to stimulate the audience's taste buds. These were mainly designed to be used on social media, but were further updated for packaging purposes.
                            `,
            },
          });

          break;
        case "OAF":
          this.setState({ imageList: OAF });
          this.setState({ colLength: 1 });
          this.setState({
            galleryDesc: {
              title: "Otakuaf",
              date: "October 2020 - November 2020",
              desc: `Otakuaf is a start-up merchandising brand that focuses on creating Japanese anime designs.\n
                            The brief was to merge characters from the anime universe to form a piece of high contradiction and 
                            high demand by the crazy anime-watching audience. Each design is inspired by a mix of various Japanese animation characters. 
                            These were designed to be laser printed on T-shirts.`,
            },
          });
          break;
        case "Poster":
          this.setState({ imageList: Poster });
          this.setState({ colLength: 3 });
          this.setState({
            galleryDesc: {
              title: "The Examiner",
              date: `March 2019 - May 2019 - Design Intern | 
                            September 2019 - December 2019 - Full-time Designer`,
              desc: `
                            The Examiner is a Catholic Newsweekly published in the Archdiocese of Bombay, India. 
                            It also serves as the official news magazine for the Archdiocese.
                            From the Examiner’s first social media appearance to creating its logo, templates, themes, 
                            posters etc on various social media platforms like Instagram, Facebook and Youtube were single handedly managed by this first-year college student. The job also included designing of various print media like Banners, Standees, Annual reports, Social media survey handbook, Phone grips, Fridge magnets, etc. Apart from the design part, the job also had me gather data (images, videos, interviews, etc) by carrying out field visits to various events that were to be recorded/posted on social media.
                            `,
            },
          });
          break;
        case "CDs":
          this.setState({ imageList: CDs });
          this.setState({ colLength: 3 });
          this.setState({
            galleryDesc: {
              title: "",
              date: "",
              desc: ``,
            },
          });
          break;
        default:
          console.log("Error!");
      }
      window.scroll({
        top: 200,
        behavior: "smooth",
      });
    };
    return (
      <MainContainer>
        {this.state.showGallery ? (
          <BackArrow>
            <span
              onClick={() =>
                this.setState({ showGallery: !this.state.showGallery })
              }
              className="back_class onhover-red"
            >
              BACK
            </span>
          </BackArrow>
        ) : null}
        <FlexRow>
          <div style={{ width: "100%", marginBottom: "20px" }}>
            <Divider />
            {this.state.showGallery ? (
              <div
                className="gallery_container"
                data-aos="fade-in"
                data-aos-offset="60"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <div className="gallery_title">
                  {this.state.galleryDesc.title}
                </div>
                <div className="gallery_date">
                  {this.state.galleryDesc.date}
                </div>
                <div className="gallery_desc">
                  {this.state.galleryDesc.desc}
                </div>
              </div>
            ) : (
              <PageTitle
                data-aos="fade-in"
                data-aos-offset="60"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                Avicia Fernandes is an Illustrator living in Mumbai, India{" "}
                <br />
                who believes imagination can change the world.
              </PageTitle>
            )}
            <Divider />
          </div>
        </FlexRow>
        <FlexRow
          style={{
            marginBottom: 20,
            display: this.state.showGallery ? "none" : "flex",
          }}
        >
          <FlexCol style={boxNavs} onClick={() => setFolder("LOGOS")}>
            <div className="onView" style={card_body0}></div>
            <div className="boxes onhover-red" style={card_caption}>
              Logos
            </div>
          </FlexCol>
          <FlexCol style={boxNavs} onClick={() => setFolder("BRs")}>
            <div className="onView" style={card_body1}></div>
            <div className="boxes onhover-red" style={card_caption}>
              Baskin-Robbins
            </div>
          </FlexCol>
          <FlexCol style={boxNavs} onClick={() => setFolder("OAF")}>
            <div className="onView" style={card_body6}></div>
            <div className="onhover-red boxes" style={card_caption}>
              OtakuAF
            </div>
          </FlexCol>
          <FlexCol style={boxNavs} onClick={() => setFolder("Poster")}>
            <div className="onView" style={card_body5}></div>
            <div className="onhover-red boxes" style={card_caption}>
              The Examiner
            </div>
          </FlexCol>
          <FlexCol style={boxNavs} onClick={() => setFolder("VI")}>
            <div className="onView" style={card_body2}></div>
            <div className="onhover-red boxes" style={card_caption}>
              Visual Illustrations
            </div>
          </FlexCol>
          <FlexCol
            style={boxNavs}
            onClick={() => {
              setFolder("IN2020");
            }}
          >
            <div className="onView" style={card_body3}></div>
            <div className="onhover-red boxes" style={card_caption}>
              Inktober 2020
            </div>
          </FlexCol>
          <FlexCol style={boxNavs} onClick={() => setFolder("CDs")}>
            <div className="onView" style={card_body4}></div>
            <div className="onhover-red boxes" style={card_caption}>
              Character Design
            </div>
          </FlexCol>
        </FlexRow>
        {this.state.showGallery ? null : <Divider />}
        <ImageGallery
          imageList={this.state.imageList}
          colLength={this.state.colLength}
          showGallery={this.state.showGallery}
        />
      </MainContainer>
    );
  }
}

export default Home;
