import { StyledLabel, StyledInput } from "./styled"

export const Search = ({ setSearch }) => (
    <StyledLabel>
        <StyledInput onChange={({ target }) => setSearch(target.value)} type="text" placeholder="Search for Characters"/>
    </StyledLabel>
)

