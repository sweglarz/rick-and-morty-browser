import styled from "styled-components";
import background from "../images/details_background.png";

export const StyledWrapper = styled.div`
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.breakpoints.smallScreens}px) {
        justify-content: space-evenly;
 };
`;
export const StyledCharacter = styled.div`
    flex-basis: 220px; 
    position: relative;
    padding: 0 15px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        flex-basis: 280px; 
 };
`;
export const StyledImage = styled.img`
    max-width: 100%;
    box-shadow: 0px 0px 12px 0px ${({ theme }) => theme.color.Conifer};
    border-radius: 5px;
`;
export const StyledParagraphName = styled.p`
    color: ${({ theme }) => theme.color.White};
    font-size:18px;
    margin: 6px 0 30px;
`;
export const StyledParagraphStatus = styled.p`
    position: absolute;
    color: ${({ theme }) => theme.color.White};
    margin: 8px auto;
    top: -4px; 
    left: 18px;
    border-radius: 5px;
    padding: 4px 12px;
    letter-spacing: 2px;
`;
export const StyledAliveStatus = styled(StyledParagraphStatus)`
    background-color: ${({ theme }) => theme.color.Green};
`;
export const StyledDeadStatus = styled(StyledParagraphStatus)`
    background-color: ${({ theme }) => theme.color.Red};
`;
export const StyledUnknownStatus = styled(StyledParagraphStatus)`
    background-color: ${({ theme }) => theme.color.DustyGray};
`;
export const StyledCharacterButton = styled.button`
    font-family: 'Kanit', sans-serif;
    position: absolute;
    color: ${({ theme }) => theme.color.White};
    top: 160px;
    left: 15px;
    border: none;
    padding: 3px;
    border-radius: 0 0 5px 5px;
    margin: 0 auto;
    width: 190px;
    font-size: 16px;
    text-shadow: 0px 0px 4px ${({ theme }) => theme.color.Black};
    background-color: ${({ theme }) => theme.color.EasternBlueLightPlus};
    cursor: pointer;
    transition: 400ms;

    &:hover{
    background-color: ${({ theme }) => theme.color.EasternBlueDark};
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        top: 220px;
        width: 250px
 };
    @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}px) {
        top: 205px;
        width: 234px
 };
`;
export const StyledDetails = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    background-color: ${({ theme }) => theme.color.BlackLight};
`;
export const StyledCharacterDetails = styled.div`
    position: relative;
    max-width: 300px;
    background-image: url("${background}");
    border-radius: 0 0 25px 25px;
    box-shadow: 0px 0px 30px 4px ${({ theme }) => theme.color.Black};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        max-width: 250px;
 };
`;
export const StyledCharacterDetailsButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    color: ${({ theme }) => theme.color.White};
    font-weight: bold;
    font-size: 16px;
    text-shadow: 0px 0px 3px ${({ theme }) => theme.color.Black};
    border-radius: 0 0 0 10px;
    border: none;
    padding: 0;
    background-color: ${({ theme }) => theme.color.EasternBlue};
    cursor: pointer;
    transition: 400ms;

    &:hover{
    background-color: ${({ theme }) => theme.color.EasternBlueDark};
    };
`;
export const StyledButtonSpan = styled.span`
    display: inline-block;
    padding: 6px 12px;
    transition: 400ms;

    &:hover{
    transform: rotate(180deg);
    };
`
export const StyledDetailsImage = styled.img`
    width: 100%;
`;
export const StyledDetailsParagraphStatus = styled.p`
    position: absolute;
    color: ${({ theme }) => theme.color.White};
    width: 100%;
    top: 255px; 
    padding: 4px 12px;
    letter-spacing: 2px;
    font-size: 18px;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        top: 210px; 
 };
`;
export const StyledDetailsAliveStatus = styled(StyledDetailsParagraphStatus)`
    background-color: ${({ theme }) => theme.color.Green};
`;
export const StyledDetailsDeadStatus = styled(StyledDetailsParagraphStatus)`
    background-color: ${({ theme }) => theme.color.Red};
`;
export const StyledDetailsUnknownStatus = styled(StyledDetailsParagraphStatus)`
    background-color: ${({ theme }) => theme.color.DustyGray};
`;
export const StyledDetailsParagraph = styled.p`
    color: ${({ theme }) => theme.color.White};
    width: 100%;
    font-size: 18px;
    padding: 0 20px;
    text-align: left;
    word-break: break-all;
    text-shadow: 0px 0px 4px ${({ theme }) => theme.color.Black};
`;
export const StyledDetailsSpan = styled.span`
    color: ${({ theme }) => theme.color.EasternBlue};
`;