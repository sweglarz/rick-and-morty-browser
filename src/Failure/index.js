import errorImage from "../images/error_image.jpg";
import { StyledInformation,
    StyledDiv,
    StyledImage,
    StyledName
 } from "./styled";

export const Failure = () => (
    <StyledDiv>
        <StyledInformation>Hey Morty! Have you seen <StyledName>this character</StyledName> in our documents?</StyledInformation>
        <StyledInformation>Unfortunately, we can't find this character. Try with a different one!</StyledInformation>
        <StyledImage src={errorImage} alt="Rick and Morty as Error image"/>
    </StyledDiv>
);