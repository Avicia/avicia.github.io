import { Component } from "react";
import styled from "styled-components";
import ImageGallery from "../../Component/ImageGallery";
import { FlexContainer, FlexRow, MainContainer, PageTitle } from "../../Styles";

class Commission extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    importAll = (r) => {
        return r.keys().map(r);
    }
    render() {
        const imageList = this.importAll(require.context('../../assets/Commissions/', false, /\.(png|jpe?g|svg)$/));
        return (
            <MainContainer>
                <FlexRow>
                    <PageTitle>I drew a lot, now I draw to make everyone around me happy. This is my Happiness.</PageTitle>
                </FlexRow>
                <FlexRow>
                    <ImageGallery imageList={imageList} colLength="3" />
                </FlexRow>
            </MainContainer>
        );
    }
}

export default Commission;