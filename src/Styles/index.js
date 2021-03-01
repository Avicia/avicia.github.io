import styled from "styled-components";

export const FlexContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-around;
    padding:2vh 0;
`;
export const FlexContainerCOl = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-around;
    padding:2vh 0;
`;

export const MainContainer = styled.div`
    margin: 0px 13%;
`;

export const FlexRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    transition:"0.4s ease-in";
`;

export const FlexCol = styled.div`
    flex: 1;
    flex-direction: column;
`;

export const PageTitle = styled.p`
    font-family:'Montserrat', sans-serif;
    text-align: center;
    font-size: 26px;
    margin: 55px;
`;

export const PageHead = styled.p`
    text-align: left;
    font-family: 'Montserrat',sans-serif;
    font-weight: 900;
    font-size: 50px;
    margin-bottom: 12px;
`;

export const Divider = styled.hr`
    margin: 0 2px;
    border: none;
    height: 1px;
    background: lightgrey;
`;

export const LinkButton = styled.button`
    padding: 12px;
    margin: 0 30px;
    flex: 1;
    background: white;
    border: 3px solid red;
    color: red;
    font-weight: 600;
    margin: auto;
    transition: 0.4s ease-in-out;
    letter-spacing: 2px;&:hover {
        background: red;
        color:white;
    }

`;

export const FlexPicsColumn = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:stretch;
    align-Items:center;
    width:30%;
    flex-grow: 1;
    margin: 2%;
    max-width: 60%;
`;

export const FlexOptions = styled.div`
    display: flex;
    width: auto;
    border-radius: 12px;
    margin: 0px 36%;
    height: 30px;
    padding: 12px 0;
    font-size: 19px;
    color: black;
    justify-content: space-between;
    font-family: sans-serif;
`;
export const BackArrow = styled.div`
    position: fixed;
    left: 5%;
    top: 45%;
`;