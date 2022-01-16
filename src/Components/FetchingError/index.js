import errorApi from "../images/api_fail.png";
import {
    StyledDiv,
    StyledInformation,
    StyledImage
} from "./styled";

export const FetchingError = () => (
    <StyledDiv>
        <StyledInformation>Hey Rick! We don't have any data!</StyledInformation>
        <StyledInformation>Refresh the page or try again later.</StyledInformation>
        <StyledImage src={errorApi} alt="Rick and Morty as Fetching API fail" />
    </StyledDiv>
);