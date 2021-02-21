import { Component } from "react";
import styled from "styled-components";
import { Divider, FlexCol, FlexRow, LinkButton, MainContainer, PageHead, PageTitle } from "../../Styles";
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
            <MainContainer style={{ 'font-family': 'inherit' }}>
                <div className="flex_col">
                    <Divider />
                    <PageHead>Hello, I'm Avicia.</PageHead>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;20 year old kid who lives in Mumbai, India. I call myself an artist not because I can draw like Salvador Dali or Kim Jung Gi but just simply because I love art, it makes me happy and yes ofcourse because I can draw. I did art in school but did not embrace it enough until recently, who knew the pandemic could affect you positively as well. I always associated myself with art since I was a kid but never really thought of it as a career option. And here I am surviving off the thing I love to do the most.</p>
                    <Divider />
                </div>
                <div className="flex_col">
                    <p>In another universe, If I wasn't an Illustrator.</p>
                    <img width="100%" src={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fkillscreen.com%2Fversions%2Fwp-content%2Fuploads%2Fsites%2F2%2F2016%2F10%2Fec66dc405355925af31e991fc661b1c6.jpg%3Ffit%3D2640%252C1486%26ssl%3D1&f=1&nofb=1'} />
                    <Divider />
                </div>
                <div className="flex_col">
                    <p style={{ fontWeight: 'bold' }}>So you want to know more?</p>
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;In 2016 I finished my school and hopped into college. Well, as you read before I was not planning on making art my career so I,
                        a very intelligent young girl applied at St. Xavier's College (Fort) to complete my junior college in SCIENCE.
                        Yes like every kid who's first career choice is to become a Doctor, I went for it. (Not a human doctor
                        ofcourse I am not that smart, but close enough, a Vet. PS - I love animals.) Little did
                        I know I have a pea sized area in my brain that really enjoys Biology while the rest of
                        it is in the creativity section. However, I nailed junior college with a surprising
                        percentile (76%) and from there hopped back into where I always belonged, THE CREATIVE ARTS.
                        And Thus, 2 years back started my journey of loving my art and being proud of it.
                        I am definitely not perfect but I make people happy and will continue to do so.
                    </p>
                    <img width="100%" src={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fkillscreen.com%2Fversions%2Fwp-content%2Fuploads%2Fsites%2F2%2F2016%2F10%2Fec66dc405355925af31e991fc661b1c6.jpg%3Ffit%3D2640%252C1486%26ssl%3D1&f=1&nofb=1'} />
                </div>
                {
                    (
                        !this.state.viewContact ?
                            <FlexRow>
                                <FlexCol style={{ textAlign: 'center', margin: '30px 0', }}>
                                    <LinkButton onClick={() => { this.setState({ viewContact: true }) }}>
                                        CONTACT
                                    </LinkButton>
                                </FlexCol>
                            </FlexRow>
                            :
                            <div class="flex_col">
                                <h3 className="text-center" style={{ fontWeight: 700 }}>Want to work with me?</h3>
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
                    )
                }



            </MainContainer>
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