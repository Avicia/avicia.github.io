import { Component } from "react";
import styled from "styled-components";
import { FlexContainer } from "../../Styles";
import "./style.css";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            address: ''
        }
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        return (
            <div class="container" style={{ 'padding': '20px 100px', 'font-family': 'inherit' }}>
                <div className="flex_col">
                    <h2>Hello, I'm Avicia.</h2>
                    <p>20 year old kid who lives in Mumbai, India. I call myself an artist not because I can draw like Salvador Dali or Kim Jung Gi but just simply because I love art, it makes me happy and yes ofcourse because I can draw. I did art in school but did not embrace it enough until recently, who knew the pandemic could affect you positively as well. I always associated myself with art since I was a kid but never really thought of it as a career option. And here I am surviving off the thing I love to do the most.</p>
                </div>
                <div className="flex_col">
                    <p>In another universe, If I wasn't an Illustrator.</p>
                    <img width="100%" src={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fkillscreen.com%2Fversions%2Fwp-content%2Fuploads%2Fsites%2F2%2F2016%2F10%2Fec66dc405355925af31e991fc661b1c6.jpg%3Ffit%3D2640%252C1486%26ssl%3D1&f=1&nofb=1'} />
                </div>
                <div className="flex_col">
                    <p>So you want to know more?</p>
                    <img width="100%" src={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fkillscreen.com%2Fversions%2Fwp-content%2Fuploads%2Fsites%2F2%2F2016%2F10%2Fec66dc405355925af31e991fc661b1c6.jpg%3Ffit%3D2640%252C1486%26ssl%3D1&f=1&nofb=1'} />
                </div>

                <div class="flex_col">

                    <h3 className="text-center text-SS">Want to work with me?</h3>
                    <div className="flex_row">
                        <div className="flex_col">
                            <StyledInput type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Enter Name" />
                        </div>
                        <div className="flex_col">
                            <StyledInput type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter Email" />
                        </div>
                        <div className="flex_col">
                            <StyledInput type="text" name="address" value={this.state.address} onChange={this.handleChange} placeholder="Enter Address" />
                        </div>
                        <div className="flex_col">
                            <StyledButton type="submit" name="submit" onClick={(e) => { alert("Message Sent!!") }} value="Send >" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const StyledInput = styled.input`
    width:80%;
    padding: 10px 10px;
    margin: 5px;
    color: lightslategray;
    background: #eeeaea;
    border: 1px solid #9e9e9e73;
    border-radius: 2px;
    font-size: 18px;
`;

const StyledButton = styled.input`
    border: none;
    border-radius: 2px;
    width: 80%;
    padding: 10px 10px;
    margin: 5px;
    font-size: 18px;
    background: lightgreen;
    color: white;
`;

export default About;