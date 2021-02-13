import styled from "styled-components";

export const FlexContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-around;
    padding:2vh 0;
`;

export const MainContainer = styled.div`
    margin: 0 25vh;
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
