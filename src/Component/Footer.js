import { Component } from "react";
import { FlexCol, FlexContainer, FlexRow } from "../Styles";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <FlexContainer>
                <div></div>
                <FlexRow>
                    <FlexCol></FlexCol>
                    <FlexCol></FlexCol>
                    <FlexCol></FlexCol>
                </FlexRow>
            </FlexContainer>
        );
    }
}

export default Footer;