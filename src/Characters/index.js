import { Failure } from "../Failure";
import {
    StyledWrapper,
    StyledCharacter,
    StyledParagraphName,
    StyledImage,
    StyledAliveStatus,
    StyledDeadStatus,
    StyledUnknownStatus
} from "./styled";

export const Characters = ({ data, search }) => {

    return (
        <StyledWrapper>
            {data ? (
                data.map((character, index) => (
                    <StyledCharacter key={`key-${index}`}>
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
                        <StyledParagraphName >{character.name}</StyledParagraphName>
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