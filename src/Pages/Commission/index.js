import { Component } from "react";
import styled from "styled-components";
import ImageGallery from "../../Component/ImageGallery";
import { FlexContainer } from "../../Styles";

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
            <FlexContainer>
                <h2>I drew a lot, now I draw to make everyone around me happy. This is my Happiness.</h2>
                <ImageGallery imageList={imageList} colLength="3" />
            </FlexContainer>
        );
    }
}

export default Commission;