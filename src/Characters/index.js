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
import { useCharacters } from "../useCharacters";
import { FetchingError } from "../FetchingError";
import { Loading } from "../Loading";

export const Characters = ({ data, search }) => {
    const {characters} = useCharacters();
    console.log(characters.state)
    return (
        <StyledWrapper>
            {characters.state === "loading" 
            ? (
                <Loading/>
            )
            : (characters.state === "error" 
                ? (
                    <FetchingError/>
                )
                : (
                    <>
                        {data ? (
                            data.map((character, index) => (
                                <StyledCharacter key={`key-${index}`}>
                                    <StyledImage src={character.image} alt="" />
                                    {character.status === "Alive" ? (
                                        <StyledAliveStatus>{character.status}</StyledAliveStatus>
                                    ) : ""}
                                    {character.status === "Dead" ? (
                                        <StyledDeadStatus>{character.status}</StyledDeadStatus>
                                    ) : ""}                                        {character.status === "unknown" ? (
                                         <StyledUnknownStatus>{character.status}</StyledUnknownStatus>
                                    ) : ""}
                                    <StyledParagraphName >{character.name}</StyledParagraphName>
                                </StyledCharacter>
                            ))
                            ) 
                            : (
                                <Failure search={search} />
                            )
                        }
                    </>
                ))
            }
        </StyledWrapper>
    );
};