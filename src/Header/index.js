import title from "../images/title.png";
import { StyledImage, StyledParagraph } from "./styled";


export const Header = () => (
    <>
        <StyledImage src={title} alt="" />
        <StyledParagraph>...Browser</StyledParagraph>
    </>
);