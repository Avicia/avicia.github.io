import React, { Component } from "react";
import { MainContainer, BackArrow } from "../../Styles";
import VisualIllustation_THUMBNAIL from "../../assets/Thumbnails/VisualIllustation_THUMBNAIL.png";
import BaskinRobbins from "../../assets/Thumbnails/BaskinRobbins.webp";
import LOGOS_THUMBNAIL from "../../assets/Logos/OnyxPerfume/onyx_02.jpg";
import ONYX_THUMBNAIL from "../../assets/Logos/OnyxPerfume/onyx_02.jpg";
import EXAMINER_THUMBNAIL from "../../assets/Logos/Examiner/examiner.jpg";
import LESTEREL_THUMBNAIL from "../../assets/Logos/L_esterelBrandBook/lesterel_01.jpg";
import NAOMI_THUMBNAIL from "../../assets/Logos/Naomi/naomi_01.jpg";
import NOWValentines_THUMBNAIL from "../../assets/Logos/NNNOWValentines/valentinves_logo_1.jpeg";
import FOOD_HOUSE_THUMBNAIL from "../../assets/Logos/TheFoodHouse/foodHouse_01.png";
import CharacterDesign_THUMBNAIL from "../../assets/Thumbnails/CharacterDesign_THUMBNAIL.png";
import INKTOBER_THUMBNAIL from "../../assets/Thumbnails/INKTOBER_THUMBNAIL.png";
import Posters_THUMBNAIL from "../../assets/Thumbnails/Posters_THUMBNAIL.png";
import OtakuAF_Thumbnail from "../../assets/Thumbnails/OtakuAF_Thumbnail.png";
import ImageGallery from "../../Component/ImageGallery";
import PrimaryMenu from "../../Component/Home/PrimaryMenu";
import "./style.css";

class Home extends Component {
  importAll = (r) => {
    return r.keys().map(r);
  };
  IN2020 = this.importAll(
    require.context(
      "../../assets/Inktober2020/",
      false,
      /\.(webp|png|jpe?g|svg)$/
    )
  );
  VI = this.importAll(
    require.context(
      "../../assets/Visual_Illustrations/",
      false,
      /\.(webp|png|jpe?g|svg)$/
    )
  );
  BRs = this.importAll(
    require.context(
      "../../assets/BaskinRobbins/",
      false,
      /\.(webp|png|jpe?g|svg)$/
    )
  );
  CDs = this.importAll(
    require.context(
      "../../assets/CharacterDesign/",
      false,
      /\.(webp|png|jpe?g|svg)$/
    )
  );
  OAF = this.importAll(
    require.context("../../assets/OtakuAF/", false, /\.(webp|png|jpe?g|svg)$/)
  );
  Poster = this.importAll(
    require.context("../../assets/Posters/", false, /\.(webp|png|jpe?g|svg)$/)
  );
  LOGO_EXAMINER = this.importAll(
    require.context(
      "../../assets/Logos/Examiner",
      false,
      /\.(webp|png|jpe?g|svg)$/
    )
  );
  LOGO_ONYX = this.importAll(
    require.context(
      "../../assets/Logos/OnyxPerfume",
      false,
      /\.(webp|png|jpe?g|svg)$/
    )
  );
  LOGO_LESTEREL = this.importAll(
    require.context(
      "../../assets/Logos/L_esterelBrandBook",
      false,
      /\.(webp|png|jpe?g|svg)$/
    )
  );
  LOGO_NOWValentines = this.importAll(
    require.context(
      "../../assets/Logos/Naomi",
      false,
      /\.(webp|png|jpe?g|svg)$/
    )
  );
  LOGO_NAOMI = this.importAll(
    require.context(
      "../../assets/Logos/Naomi",
      false,
      /\.(webp|png|jpe?g|svg)$/
    )
  );
  LOGO_FoodHouse = this.importAll(
    require.context(
      "../../assets/Logos/Naomi",
      false,
      /\.(webp|png|jpe?g|svg)$/
    )
  );
  constructor(props) {
    super(props);
    this.state = {
      gallery: "",
      activeGallery: {},
      mainMenu: [
        {
          name: "Character Design",
          stateName: "CDs",
          thumbnail: `url(${CharacterDesign_THUMBNAIL})`,
          collections: {
            title: "Character Design",
            date: "",
            desc: ``,
            assets: this.CDs,
            colLength: 3,
          },
        },
        {
          name: "Baskin-Robbins",
          stateName: "BRs",
          thumbnail: `url(${BaskinRobbins})`,
          collections: {
            title: "Baskin-Robbins",
            date: "August 2020 - December 2020",
            desc: `Baskin-Robbins is an American multinational chain of ice cream and cake specialty shop restaurants owned by Inspire Brands.
                  The brief was to revamp the Baskin-Robbins logo by integrating the ice cream flavours into the creatively hidden '31' of the well-known brand.
                  The purpose of the revamp was to capture the taste and texture of each ice cream flavour into the logo to stimulate the audience's taste buds. These were mainly designed to be used on social media, but were further updated for packaging purposes.
                          `,
            assets: this.BRs,
            colLength: 2,
          },
        },
        {
          name: "OtakuAF",
          stateName: "OAF",
          thumbnail: `url(${OtakuAF_Thumbnail})`,
          collections: {
            title: "Otakuaf",
            date: "October 2020 - November 2020",
            desc: `Otakuaf is a start-up merchandising brand that focuses on creating Japanese anime designs.\n
                          The brief was to merge characters from the anime universe to form a piece of high contradiction and 
                          high demand by the crazy anime-watching audience. Each design is inspired by a mix of various Japanese animation characters. 
                          These were designed to be laser printed on T-shirts.`,
            assets: this.OAF,
            colLength: 1,
          },
        },
        {
          name: "The Examiner",
          stateName: "Poster",
          thumbnail: `url(${Posters_THUMBNAIL})`,
          collections: {
            title: "The Examiner",
            date: `March 2019 - May 2019 - Design Intern | September 2019 - December 2019 - Full-time Designer`,
            desc: `The Examiner is a Catholic Newsweekly published in the Archdiocese of Bombay, India. 
                It also serves as the official news magazine for the Archdiocese.
                From the Examiner's first social media appearance to creating its logo, templates, themes, 
                posters etc on various social media platforms like Instagram, Facebook and Youtube were single handedly managed by this first-year college student. The job also included designing of various print media like Banners, Standees, Annual reports, Social media survey handbook, Phone grips, Fridge magnets, etc. Apart from the design part, the job also had me gather data (images, videos, interviews, etc) by carrying out field visits to various events that were to be recorded/posted on social media.
                `,
            assets: this.Poster,
            colLength: 3,
          },
        },
        {
          name: "Visual Illustrations",
          stateName: "VI",
          thumbnail: `url(${VisualIllustation_THUMBNAIL})`,
          collections: {
            title: "Visual Illustrations",
            date: "",
            desc: ``,
            assets: this.VI,
            colLength: 3,
          },
        },
        {
          name: "Inktober 2020",
          stateName: "IN2020",
          thumbnail: `url(${INKTOBER_THUMBNAIL})`,
          collections: {
            title: "Inktober 2020",
            date: "",
            desc: ``,
            assets: this.IN2020,
            colLength: 3,
          },
        },
        {
          name: "Logos",
          stateName: "LOGOS",
          thumbnail: `url(${LOGOS_THUMBNAIL})`,
          folders: [
            {
              name: "examiner",
              stateName: "logo_examiner",
              thumbnail: `url(${EXAMINER_THUMBNAIL})`,
              collections: {
                assets: this.LOGO_EXAMINER,
                title: "Examiner Logo Designs",
              },
            },
            {
              name: "onyx",
              stateName: "logo_onyx",
              thumbnail: `url(${ONYX_THUMBNAIL})`,
              collections: {
                assets: this.LOGO_ONYX,
                title: "Onyx Logo Designs",
              },
            },
            {
              name: "Lesterel",
              stateName: "logo_lesterel",
              thumbnail: `url(${LESTEREL_THUMBNAIL})`,
              collections: {
                assets: this.LOGO_LESTEREL,
                title: "L'esterel Logo Designs",
              },
            },
            {
              name: "naomi",
              stateName: "logo_naomi",
              thumbnail: `url(${NAOMI_THUMBNAIL})`,
              collections: {
                assets: this.LOGO_NAOMI,
                title: "Naomi Logo Designs",
              },
            },
            {
              name: "NOWWW VALENTINES",
              stateName: "logo_now_valentine",
              thumbnail: `url(${NOWValentines_THUMBNAIL})`,
              collections: {
                assets: this.LOGO_NOWValentines,
                title: "NOWWW VALENTINES Logo Designs",
              },
            },
            {
              name: "The Food House",
              stateName: "logo_food_house",
              thumbnail: `url(${FOOD_HOUSE_THUMBNAIL})`,
              collections: {
                assets: this.LOGO_FoodHouse,
                title: "The Food House Logo Designs",
              },
            },
          ],
          collections: {
            title: "",
            date: "",
            desc: ``,
            assets: [],
            colLength: 3,
          },
        },
      ],
    };
  }
  setGallery = (state) => {
    const gallery = this.state.mainMenu.find((x) => x.stateName === state);
    this.setState({ gallery: state, activeGallery: gallery });
  };
  setLogoGallery = (state) => {
    const gallery = this.state.mainMenu[6].folders.find(
      (x) => x.stateName === state
    );
    this.setState({ gallery: state, activeGallery: gallery });
  };
  componentDidMount() {}
  render() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    return (
      <MainContainer>
        {this.state.gallery ? (
          <BackArrow>
            <span
              onClick={() =>
                this.setState({ activeGallery: "main", gallery: "" })
              }
              className="back_class onhover-red"
            >
              BACK
            </span>
          </BackArrow>
        ) : null}
        {!this.state.gallery && (
          <PrimaryMenu menu={this.state.mainMenu} setState={this.setGallery} />
        )}
        {this.state.gallery === "LOGOS" && (
          <PrimaryMenu
            menu={this.state.mainMenu[6].folders}
            setState={this.setLogoGallery}
          />
        )}
        {this.state.gallery && this.state.gallery !== "LOGOS" && (
          <ImageGallery activeGallery={this.state.activeGallery} />
        )}
      </MainContainer>
    );
  }
}

export default Home;
