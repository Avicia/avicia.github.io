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
    margin: 0px 38vh;
`;
export const FlexRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
export const FlexCol = styled.div`
    flex: 1;
    flex-direction: column;
`;

export const PageTitle = styled.p`
    text-align: center;
    font-size: 26px;
    margin: 12px;
    padding-bottom: 30px;
`;
export const PageHead = styled.p`
    text-align: left;
    font-size: 50px;
    line-height:1.1em;
    font-weight:700;
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
    border: 3px solid #9e9e9e;
    color: #9e9e9e;
    font-weight: 600;
    margin: auto;
    letter-spacing: 2px;&:hover {
        background: #9e9e9e;
        color:white;
    }

`;
export const FlexPicsColumn = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:stretch;
    align-Items:center;
    width:23%;
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
