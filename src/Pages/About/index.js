import { Component } from "react";
import styled from "styled-components";
import { FlexContainer } from "../../Styles";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <FlexContainer>
                <h2>About</h2>
            </FlexContainer>
        );
    }
}

export default About;