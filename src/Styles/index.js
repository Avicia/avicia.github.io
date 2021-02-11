import styled from "styled-components";

export const FlexContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-around;
    padding:40px 250px;
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
    padding: 12px;
    font-size: 19px;
    color: white;
    justify-content: space-around;
    font-family: sans-serif;
`;
