import loading from "../images/api_loading.jpg";
import {
    StyledDiv,
    StyledInformation,
    StyledImage
} from "./styled";

export const Loading = () => (
    <StyledDiv>
        <StyledInformation>Give us a second! We are going for your data!</StyledInformation>
        <StyledImage src={loading} alt="Rick and Morty looking for a data" />
    </StyledDiv>
);