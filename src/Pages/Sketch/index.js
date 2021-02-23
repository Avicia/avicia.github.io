import { Component } from "react";
import styled from "styled-components";
import ImageGallery from "../../Component/ImageGallery";
import { FlexContainer, FlexRow, MainContainer, PageTitle } from "../../Styles";

class Sketch extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    importAll = (r) => {
        return r.keys().map(r);
    }
    render() {
        const imageList = this.importAll(require.context('../../assets/Sketches/', false, /\.(png|jpe?g|svg)$/));
        return (
            <MainContainer>
                <FlexRow>
                    <PageTitle>You have officially unlocked the sacred pages.</PageTitle>
                </FlexRow>
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