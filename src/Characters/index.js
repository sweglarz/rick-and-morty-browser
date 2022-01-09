import { Failure } from "../Failure";
import {
    StyledWrapper,
    StyledCharacter,
    StyledParagraph,
    StyledImage
} from "./styled";

export const Characters = ({ data, search }) => {
    return (
        <StyledWrapper>
            {data ? (
                data.map((character, index) => (
                    <StyledCharacter key={`key-${index}`}>
                        <StyledImage src={character.image} alt="" />
                        <StyledParagraph>{character.name}</StyledParagraph>
                    </StyledCharacter>
                ))
            ) :
                (
                    <Failure search={search} />
                )
            }
        </StyledWrapper>
    );
};