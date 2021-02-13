import { Component } from "react";
import styled from "styled-components";
import ImageGallery from "../../Component/ImageGallery";
import { FlexContainer } from "../../Styles";

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
            <FlexContainer>
                <h2>You have officially unlocked the sacred pages.</h2>
                <ImageGallery imageList={imageList} colLength="3" />
            </FlexContainer>
        );
    }
}

export default Sketch;