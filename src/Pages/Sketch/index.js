import { Component } from "react";
import ImageGallery from "../../Component/ImageGallery";
import { Divider, FlexRow, MainContainer, PageTitle } from "../../Styles";

class Sketch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  importAll = (r) => {
    return r.keys().map(r);
  };
  render() {
    const sketches = this.importAll(
      require.context(
        "../../assets/Sketches/",
        false,
        /\.(webp|png|jpe?g|svg)$/
      )
    );
    const gallery = {
      name: "Sketches",
      stateName: "sketches",
      thumbnail: ``,
      collections: {
        title: "Sketches",
        date: "",
        desc: ``,
        assets: sketches,
        colLength: 3,
      },
    };
    return (
      <MainContainer>
        <Divider />
        <FlexRow>
          <PageTitle
            data-aos="fade-in"
            data-aos-offset="60"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            You have officially unlocked the sacred pages.
          </PageTitle>
        </FlexRow>
        <Divider />
        <FlexRow
          style={{
            minHeight: "40vh",
          }}
        >
          <ImageGallery activeGallery={gallery} />
        </FlexRow>
      </MainContainer>
    );
  }
}

export default Sketch;
