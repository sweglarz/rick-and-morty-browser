import styled from "styled-components";

export const StyledWrapper = styled.div`
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
export const StyledCharacter = styled.div`
    font-family: 'Kanit', sans-serif;
    flex-basis: 220px; 
    position: relative;
`

export const StyledImage = styled.img`
    max-width: 100%;
    box-shadow: 0px 0px 12px 1px #22a2bd;
    transition: 400ms;
    border-radius: 5px;
    cursor: pointer;
    
    &:hover{
    box-shadow: 0px 0px 34px 0px #6FE147;
    transform: scale(102%);

    }
`

export const StyledParagraph = styled.p`
    color: #fff;
    font-size:18px;
    margin: 8px 0;
`