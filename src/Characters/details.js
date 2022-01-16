import { useState } from "react";
import {
    StyledCharacter,
    StyledParagraphName,
    StyledImage,
    StyledAliveStatus,
    StyledDeadStatus,
    StyledUnknownStatus,
    StyledDetails,
    StyledCharacterDetails,
    StyledCharacterButton,
    StyledCharacterDetailsButton,
    StyledDetailsImage,
    StyledDetailsAliveStatus,
    StyledDetailsDeadStatus,
    StyledDetailsUnknownStatus,
    StyledDetailsParagraph,
    StyledDetailsSpan,
    StyledButtonSpan
} from "./styled";

export const CharactersDetails = ({ character }) => {
    const [details, setDetails] = useState(false);

    const showDetails = () => {
        setDetails(!details)
    };
    return (
        <>
            <StyledCharacter key={character.id}>
                <StyledImage src={character.image} alt="" />
                {character.status === "Alive" ? (
                    <StyledAliveStatus>{character.status}</StyledAliveStatus>
                ) : ""}
                {character.status === "Dead" ? (
                    <StyledDeadStatus>{character.status}</StyledDeadStatus>
                ) : ""}
                {character.status === "unknown" ? (
                    <StyledUnknownStatus>{character.status}</StyledUnknownStatus>
                ) : ""}
                <StyledParagraphName>{character.name}</StyledParagraphName>
                <StyledCharacterButton onClick={showDetails}>Details</StyledCharacterButton>
            </StyledCharacter>

            {details && (
                <StyledDetails>
                    <StyledCharacterDetails key={character.id}>
                        <StyledDetailsImage src={character.image} alt="" />
                        <StyledCharacterDetailsButton onClick={showDetails}><StyledButtonSpan>x</StyledButtonSpan></StyledCharacterDetailsButton>
                        {character.status === "Alive" ? (
                            <StyledDetailsAliveStatus>{character.status}</StyledDetailsAliveStatus>
                        ) : ""}
                        {character.status === "Dead" ? (
                            <StyledDetailsDeadStatus>{character.status}</StyledDetailsDeadStatus>
                        ) : ""}
                        {character.status === "unknown" ? (
                            <StyledDetailsUnknownStatus>{character.status}</StyledDetailsUnknownStatus>
                        ) : ""}
                        <StyledDetailsParagraph><StyledDetailsSpan>Name:</StyledDetailsSpan>&nbsp;{character.name}</StyledDetailsParagraph>
                        <StyledDetailsParagraph><StyledDetailsSpan>Species:</StyledDetailsSpan>&nbsp;{character.species}</StyledDetailsParagraph>
                        <StyledDetailsParagraph><StyledDetailsSpan>Gender:</StyledDetailsSpan>&nbsp;{character.gender}</StyledDetailsParagraph>
                        <StyledDetailsParagraph><StyledDetailsSpan>Location:</StyledDetailsSpan>&nbsp;{character.location.name}</StyledDetailsParagraph>
                        <StyledDetailsParagraph><StyledDetailsSpan>Origin:</StyledDetailsSpan>&nbsp;{character.origin.name}</StyledDetailsParagraph>
                    </StyledCharacterDetails>
                </StyledDetails>
            )}
        </>
    )
};