import errorImage from "../images/error_image.jpg";
import {
    StyledInformation,
    StyledDiv,
    StyledImage,
    StyledName
} from "./styled";

export const Failure = ({ search }) => (
    <StyledDiv>
        <StyledInformation>Hey Morty! Where are my documents?!</StyledInformation>
        <StyledInformation>Unfortunately, we can't find <StyledName>{search ? (search) : ("this character")}</StyledName>. Try with a different one!</StyledInformation>
        <StyledImage src={errorImage} alt="Rick and Morty as Error image" />
    </StyledDiv>
);