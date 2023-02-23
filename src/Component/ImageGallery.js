import { Component } from "react";
import { FlexContainer, FlexPicsColumn, FlexRow } from "../Styles";
import "../Pages/Home/style.css";

class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const divCss = {
      paddingBottom: "50px",
    };
    const imagesCss = {
      WebkitAnimationName: "fadeIn",
      animationName: "fadeIn",
      WebkitAnimationDuration: "3s",
      animationDuration: "3s",
      boxShadow: "1px 1px 10px -8px black",
    };
    if (!this.props.activeGallery.collections.assets) {
      return null;
    }
    const Images = this.props.activeGallery.collections.assets || [];
    const totCols = parseInt(
      this.props.activeGallery?.collections?.colLength || 2
    );
    const colLength = Math.round(Images.length / totCols);
    return (
      <>
        <FlexRow>
          <div
            className="gallery_container"
            data-aos="fade-in"
            data-aos-offset="60"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="gallery_title">
              {this.props?.activeGallery?.collections?.title || ""}
            </div>
            <div className="gallery_date">
              {this.props?.activeGallery?.collections?.date || ""}
            </div>
            <div className="gallery_desc">
              {this.props?.activeGallery?.collections?.desc || ""}
            </div>
          </div>
        </FlexRow>
        <FlexRow>
          <FlexContainer className="cus_cursor">
            {Images.length > 0 ? (
              Array(totCols)
                .fill(1)
                .map((v, ind) => {
                  return (
                    <FlexPicsColumn key={ind} style={{ flexWrap: "nowrap" }}>
                      {Images.slice(colLength * ind, colLength * (ind + 1)).map(
                        (v, i) => {
                          return (
                            <div key={i} style={divCss}>
                              <img
                                src={v.default}
                                width="100%"
                                alt="image1"
                                style={imagesCss}
                              />
                            </div>
                          );
                        }
                      )}
                    </FlexPicsColumn>
                  );
                })
            ) : (
              <h1 style={{ textAlign: "center", height: 200 }}>
                No Image Uploaded!!
              </h1>
            )}
          </FlexContainer>
        </FlexRow>
      </>
    );
  }
}

export default ImageGallery;
