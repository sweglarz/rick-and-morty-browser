import { 
    StyledWrapper, 
    StyledCharacter, 
    StyledParagraph, 
    StyledImage } from "./styled";

export const Characters = ({ data }) => {
    return (
        <StyledWrapper>
            {data?.map((character, index) => (
                <StyledCharacter key={`key-${index}`}>
                    <StyledImage src={character.image} alt="" />
                    <StyledParagraph>{character.name}</StyledParagraph>
                </StyledCharacter>
            ))}
        </StyledWrapper>
    );
};