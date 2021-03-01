import { Component } from "react";
import styled from "styled-components";
import ImageGallery from "../../Component/ImageGallery";
import { Divider, FlexContainer, FlexRow, MainContainer, PageTitle } from "../../Styles";

class Sketch extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    importAll = (r) => {
        return r.keys().map(r);
    }
    render() {
        const imageList = this.importAll(require.context('../../assets/Sketches/', false, /\.(webp|png|jpe?g|svg)$/));
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
                    >You have officially unlocked the sacred pages.</PageTitle>
                </FlexRow>
                <Divider />
                <FlexRow style={{
                    minHeight: '40vh'
                }}>
                    <ImageGallery
                        imageList={imageList} colLength="3"
                        showGallery={true} />
                </FlexRow>
            </MainContainer >
        );
    }
}

export default Sketch;