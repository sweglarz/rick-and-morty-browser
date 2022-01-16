import { Failure } from "../Failure";
import {
    StyledWrapper
} from "./styled";
import { useCharacters } from "../useCharacters";
import { FetchingError } from "../FetchingError";
import { Loading } from "../Loading";
import { CharactersDetails } from "./details";

export const Characters = ({ data, search }) => {
    const { characters } = useCharacters();

    return (
        <StyledWrapper>
            {characters.state === "loading"
                ? (
                    <Loading />
                )
                : (characters.state === "error"
                    ? (
                        <FetchingError />
                    )
                    : (
                        <>
                            {data ? (
                                data.map((character) => (
                                    <>
                                        <CharactersDetails
                                            key={character.id}
                                            character={character}
                                        />
                                    </>
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