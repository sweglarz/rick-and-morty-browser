import styled from "styled-components";

export const StyledWrapper = styled.div`
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
export const StyledCharacter = styled.div`
    flex-basis: 220px; 
    position: relative;
`;
export const StyledImage = styled.img`
    max-width: 100%;
    box-shadow: 0px 0px 12px 1px ${({theme}) => theme.color.EasternBlue};
    transition: 400ms;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        transform: scale(102%);
        box-shadow: 0px 0px 34px 0px ${({theme}) => theme.color.Conifer};
    };
`;
export const StyledParagraphName = styled.p`
    color: ${({theme}) => theme.color.White};
    font-size:18px;
    margin: 8px 0;
`;
export const StyledParagraphStatus = styled.p`
    position: absolute;
    color: ${({theme}) => theme.color.White};
    margin: 8px auto;
    top: 0; 
    left: 5px;
    border-radius: 0 12px;
    padding: 4px 12px;
    letter-spacing: 2px;
`;
export const StyledAliveStatus = styled(StyledParagraphStatus)`
    background-color: ${({theme}) => theme.color.Green};
`;
export const StyledDeadStatus = styled(StyledParagraphStatus)`
    background-color: ${({theme}) => theme.color.Red};
`;
export const StyledUnknownStatus = styled(StyledParagraphStatus)`
    background-color: ${({theme}) => theme.color.DustyGray};
`;