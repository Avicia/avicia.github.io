import React, { Component } from "react";
import styled from "styled-components";
import sendNodeMail from "../../Component/Email/sendEmailJS";
import { Divider, FlexCol, FlexRow, LinkButton, MainContainer, PageHead } from "../../Styles";
import Avicia_profile from "../../assets/Thumbnails/avicia_profile.webp";
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
                <Divider />
                <div className="flex_col" >
                    <div className="first_container">
                        <div className="right_profile_container">
                            <img
                                className="profile_image"
                                src={Avicia_profile} alt="avicia profile" />
                        </div>
                        <div className="left_container">
                            <PageHead>Hello, <br /> I'm Avicia.</PageHead>
                            <p className="about_paras" >
                                20 year old, India-based Illustrator and Graphic Designer. I call myself an artist not
                                because I can paint surrealism like Salvador Dali or sketch characters like Shiyoon Kim
                                but just simply because I believe an Artist’s greatest skill is his imagination and well,
                                <b className="family-Montserrat"> I have MINE.</b>
                            </p>
                            <p className="about_paras" style={{ color: 'red' }}><i className="family-Montserrat">‘‘Art Matters because YOUR imagination can change the world.’’</i> - Neil Gaiman</p>
                            <p className="about_paras">
                                I briefly studied art in school but did not embrace it enough until recently, who knew the pandemic could affect you positively as well. Although, I did always associate myself with art ever since I was a kid, I was good at it and everyone noticed me because of it but I never really thought of it as a career option. However, Here I am surviving off the thing I never thought I’d be doing.
                            </p>

                        </div>
                    </div>
                    <Divider />
                </div>
                <div className="flex_col">
                    <p className="about_title">So you want to know more?</p>
                    <p className="about_paras">
                        In 2016, I completed School and hopped into College. Well, as you read before I was not planning on turning art into my career, So I, a very intelligent young woman, applied to St. Xavier's College (Fort) to complete my junior college in SCIENCE. Yes, like every growing kid who's first career choice is to become a Doctor, I went for it. (Not a human doctor, Of course, But close enough, a Veterinarian. PS - I love animals.) Little did I know I have a pea sized area in my brain that loves Biology while the rest of it is attracted to Applied Arts.
                        <br />
                        However, I nailed junior college and from there got back to where I always belonged.
                        Wait, Not yet, I did a detour to Architecture. I fit in perfectly there, studied for the NATA examination and I was ready. But that wasn’t it, I felt something missing.
                        <br />
                        And Then, it happened, I woke up one day and decided to do what I always wanted to do but was so afraid to do. (Afraid because of the whole jobless taboo stuck to an artist)
                        <br />
                        Today, I love my job and I am truly proud of myself.
                        <br />
                        And I am definitely not jobless :p
                            </p>
                    <Divider />
                </div>
                <FlexRow style={{ alignItems: 'flex-start' }}>
                    <FlexCol style={{ paddingRight: 10 }}>
                        <p className="about_title">
                            <br />
                            <br />
                            Experience
                        </p>
                        <p className="about_paras">
                            Baskin Robbins - Graviss Foods Pvt Ltd - India<br />
                            <MonstRed>Freelance Illustrator</MonstRed><br />
                            <MonstThin>August 2020 - December 2020 | India</MonstThin><br />
                            <br />
                            Otakuaf<br />
                            <MonstRed>Freelance Illustrator</MonstRed><br />
                            <MonstThin>October 2020 - November 2020 | India</MonstThin><br />
                            <br />
                            The Examiner Newsweekly India<br />
                            <MonstRed>Graphic Designer</MonstRed><br />
                            <MonstThin>December 2019 - December 2020 | Mumbai, India.</MonstThin><br />
                            <br />
                            The Souled Store Pvt. Ltd.<br />
                            <MonstRed>Graphic Design Intern</MonstRed><br />
                            <MonstThin>September 2019 - December 2019 | Mumbai, India.</MonstThin><br />
                            <br />
                            The Examiner Newsweekly India<br />
                            <MonstRed>Graphic Design Intern</MonstRed><br />
                            <MonstThin>March 2019 - May 2019 | Mumbai, India.</MonstThin><br />
                            <br />
                        </p>
                    </FlexCol>
                    <FlexCol style={{ padding: '0 50px' }}>
                        <p className="about_title">
                            <br />
                            <br />
                            Education
                        </p>
                        <p className="about_paras">
                            St. Pauls Institute Of Communication Education, Bandra<br />
                            <MonstRed>B.Voc in Graphics and Multimedia</MonstRed><br />
                            <MonstThin>June 2018 - July 2021 </MonstThin><br />
                            <br />
                            St. Xavier's College, Fort<br />
                            <MonstRed>HSC (Science)</MonstRed><br />
                            <MonstThin>February 2018 </MonstThin><br />
                            <br />
                            Canossa High School, Mahim<br />
                            <MonstRed>SSC</MonstRed><br />
                            <MonstThin>February 2016 </MonstThin><br />
                            <br />
                        </p>
                    </FlexCol>
                </FlexRow>
                <Divider />

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
                            <div class="flex_col" data-aos="fade-up" data-offset="30">
                                <div className="about_title text-center " style={{ marginTop: 28, marginBottom: 7, textTransform: 'uppercase' }}>Want to work with me?</div>
                                <div className="about_paras text-center">
                                    Get in touch with me at <span className="animate_span"> aviciafernandes@gmail.com </span> <br />
                                        Or Fill in below details.
                                </div>
                                <div className="about_title" style={{ marginTop: 15, marginBottom: 15, fontFamily: 'Montserrat', fontSize: 20, textAlign: 'center' }}>Let’s talk.</div>
                                <div className="flex_row">
                                    <div className="flex_col">
                                        <StyledInput type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Enter Name" />
                                    </div>
                                    <div className="flex_col">
                                        <StyledInput type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter Email" />
                                    </div>
                                    <div className="flex_col">
                                        <StyledInput type="text" name="message" value={this.state.message} onChange={this.handleChange} placeholder="Enter Message" />
                                    </div>
                                    <div className="flex_col">
                                        <StyledButton type="submit" name="submit" onClick={(e) => {
                                            sendNodeMail(this.state.name, this.state.email, 'A New Message from the ' + this.state.name, this.state.message)
                                            alert("Message Sent!!")
                                        }} value="Send" />
                                    </div>
                                </div>
                            </div>
                    )
                }
            </MainContainer >
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
    background: black;
    color: white;
`;
const MonstThin = styled.b`
    font-family:'Montserrat';   
    font-weight: 100;
`;
const MonstRed = styled.span`
    font-family:'Montserrat';
    color:red
`;

export default About;