import {
    StyledWrapper
} from "./styled";
import { FetchingError } from "../FetchingError";
import { Loading } from "../Loading";
import { CharactersDetails } from "./details";

export const Characters = ({ data, search, state }) => {

    return (
        <StyledWrapper>
            {state === "loading"
                ? (
                    <Loading />
                )
                : (state === "error"
                    ? (
                        <FetchingError />
                    )
                    : (
                        <>
                            {
                                data?.map((character) => (
                                    <CharactersDetails
                                        key={character.id}
                                        character={character}
                                    />
                                ))
                            }
                        </>
                    ))
            }
        </StyledWrapper>
    );
};