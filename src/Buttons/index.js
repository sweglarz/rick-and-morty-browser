import { StyledButtonWrapper, StyledButtons } from "./styled";

export const Buttons = ({setPage}) => {

    const nextPage = () => {
        setPage(page => page +1);
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }

    const previousPage = () => {
        setPage(page => page -1);
    }
    return (
        <StyledButtonWrapper>
            <StyledButtons onClick={previousPage}>Previous</StyledButtons>
            <StyledButtons onClick={nextPage}>Next</StyledButtons>
        </StyledButtonWrapper>
    )
} 