import { Component } from "react";
import { FlexContainer, FlexPicsColumn, FlexRow, FlexCol, MainContainer, Divider } from "../Styles";
import '../Pages/Home/style.css';

class ImageGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const divCss = {
            'paddingBottom': '50px',
        }
        const imagesCss = {
            // 'boxShadow': '0px 4px 8px -4px black',
            'WebkitAnimationName': 'fadeIn',
            'animationName': 'fadeIn',
            'WebkitAnimationDuration': '3s',
            'animationDuration': '3s',
        }
        const img = this.props.imageList;
        const totCols = parseInt(this.props.colLength);
        const colLength = Math.round(img.length / totCols);//1
        return (
            <FlexContainer
                className="cus_cursor"
                style={{ display: (this.props.showGallery ? "flex" : 'none') }}
            >
                {
                    (img.length > 0 ?
                        Array(totCols).fill(1).map((v, ind) => {
                            console.log(img);
                            return (
                                <FlexPicsColumn key={ind}>
                                    {
                                        (true ?
                                            img.slice(colLength * ind, colLength * (ind + 1)).map((v, i) => {
                                                console.log(ind);
                                                return (
                                                    <div key={i} style={divCss}>
                                                        <img src={v.default} width="100%" alt="image1" style={imagesCss} />
                                                    </div>
                                                )
                                            }) :
                                            <div></div>
                                        )
                                    }
                                </FlexPicsColumn>
                            )
                        })
                        :
                        <h1 style={{ textAlign: 'center', height: 200 }}>No Image Uploaded!!</h1>)
                }
                {/* <FlexPicsColumn>
                    {
                        img.slice(colLength * 0, colLength * 1).map((v, i) => {
                            return (
                                <div key={i} style={divCss}>
                                    <img src={v.default} width="100%" alt="image1" style={imagesCss} />
                                </div>
                            )
                        })
                    }
                </FlexPicsColumn>
                <FlexPicsColumn>
                    {
                        img.slice(colLength * 1, colLength * 2).map((v, i) => {
                            return (
                                <div key={i} style={divCss}>
                                    <img src={v.default} width="100%" alt="image1" style={imagesCss} />
                                </div>
                            )
                        })
                    }
                </FlexPicsColumn>
                <FlexPicsColumn>
                    {
                        img.slice(colLength * 2, colLength * 3).map((v, i) => {
                            return (
                                <div key={i} style={divCss}>
                                    <img src={v.default} width="100%" alt="image1" style={imagesCss} />
                                </div>
                            )
                        })
                    }
                </FlexPicsColumn>
                <FlexPicsColumn>
                    {
                        img.slice(colLength * 3, colLength * 4).map((v, i) => {
                            return (
                                <div key={i} style={divCss}>
                                    <img src={v.default} width="100%" alt="image1" style={imagesCss} />
                                </div>
                            )
                        })
                    }
                </FlexPicsColumn> */}
            </FlexContainer>
        );
    }
}

export default ImageGallery;