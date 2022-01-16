import {
    StyledForm,
    StyledSearch,
    StyledLabel,
    StyledSpan,
    StyledInput,
    StyledSelect,
    StyledButton,
    StyledOption,
} from "./styled";
import { status, gender, species } from "../useFilters";

export const Search = ({ setSearch, setStatus, setPage, setGender, setSpecies }) => {
    const onFormSubmit = (event) => {
        event.preventDefault()
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <StyledLabel>
                <StyledSpan>Status</StyledSpan>
                <StyledSelect
                    onChange={({ target }) => {
                        setPage(1);
                        setStatus(target.value)
                    }}
                    defaultValue={"Choose Status"}
                >
                    <option
                        disabled hidden>
                        Choose Status
                    </option>
                    {status.map(((item, index) => (
                        <StyledOption
                            key={index}
                        >
                            {item}
                        </StyledOption>
                    )))}
                </StyledSelect>
            </StyledLabel>
            <StyledLabel>
                <StyledSpan>Gender</StyledSpan>
                <StyledSelect
                    onChange={({ target }) => {
                        setPage(1);
                        setGender(target.value)
                    }}
                    defaultValue={"Choose Gender"}
                >
                    <option
                        disabled hidden>
                        Choose Gender
                    </option>
                    {gender.map(((item, index) => (
                        <StyledOption
                            key={index}
                        >
                            {item}
                        </StyledOption>
                    )))}
                </StyledSelect>
            </StyledLabel>
            <StyledLabel>
                <StyledSpan>Species</StyledSpan>
                <StyledSelect
                    onChange={({ target }) => {
                        setPage(1);
                        setSpecies(target.value)
                    }}
                    defaultValue={"Choose Species"}
                >
                    <option
                        disabled hidden>
                        Choose Species
                    </option>
                    {species.map(((item, index) => (
                        <StyledOption
                            key={index}
                        >
                            {item}
                        </StyledOption>
                    )))}
                </StyledSelect>
            </StyledLabel>
            <StyledSearch>
                <StyledInput onChange={({ target }) => {
                    setPage(1);
                    setSearch(target.value)
                }}
                    type="text"
                    placeholder="Search for Characters" />
            </StyledSearch>
            <StyledButton
                type="reset"
                onClick={() => {
                    setPage(1);
                    setGender("");
                    setStatus("");
                    setSpecies("");
                    setSearch("");
                }}>
                Clear filters
            </StyledButton>
        </StyledForm >
    );
};


