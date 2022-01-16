import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    justify-content: space-around;

    @media (max-width: ${({ theme }) => theme.breakpoints.firstBreakPoint}px) {
        flex-wrap: wrap;
        justify-content: space-evenly;
        padding: 0 15px ;
 };
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        justify-content: space-between;
 };
`;
export const StyledLabel = styled.label`
    flex-basis: 15%;

    @media (max-width: ${({ theme }) => theme.breakpoints.firstBreakPoint}px) {
        display: flex;
        flex-basis: 25%;
        flex-direction: column;
        padding: 20px 0;
 };
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        flex-basis: 100%;
 };
 
`;
export const StyledSearch = styled(StyledLabel)`
    flex-basis: 25%;
    align-self: flex-end;

    @media (max-width: ${({ theme }) => theme.breakpoints.firstBreakPoint}px) {
        flex-basis: 40%;
 };
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        order:-1;
        flex-basis: 100%;
 };
`;
export const StyledInput = styled.input`
    font-family: 'Kanit', sans-serif;
    padding: 10px 10px 4px;
    width: 100%;
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.color.EasternBlue};
    background-color: transparent;
    color: ${({ theme }) => theme.color.EasternBlue};
    outline: none;
    font-size: 16px;
    font-weight: bold;

    &:focus{
        border-bottom: 2px solid ${({ theme }) => theme.color.White};
    };

    &::placeholder{
        color: ${({ theme }) => theme.color.EasternBlueLight};
        font-size: 16px;
        transition: opacity 500ms;
    };

    &:focus::placeholder{
        opacity: 0;
    };
`;
export const StyledSelect = styled.select`
    max-width: 250px;
    width: 100%;
    padding: 7px 10px;
    font-size: 14px;
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.color.EasternBlue};
    background-color: transparent;
    color: ${({ theme }) => theme.color.EasternBlue};
    outline: none;
    cursor: pointer;

    &:focus{
        border-bottom: 2px solid ${({ theme }) => theme.color.White};
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        max-width: 100%;
 };
`;
export const StyledSpan = styled.span`
    color: ${({ theme }) => theme.color.White};
    display: inline-block;
`;
export const StyledButton = styled.button`
    font-family: 'Kanit', sans-serif;
    flex-basis: 11%;
    align-self: flex-end;
    padding: 7px;
    background-color: ${({ theme }) => theme.color.EasternBlue};
    border: none;
    border-radius: 5px;
    color: ${({ theme }) => theme.color.White};
    font-size: 15px;
    text-shadow: 0px 0px 4px ${({ theme }) => theme.color.Black};
    cursor: pointer; 
    transition: 300ms;

    &:hover{
        background-color: ${({ theme }) => theme.color.EasternBlueDark};
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.firstBreakPoint}px) {
        flex-basis: 25%;
        align-self: center;
 };
 
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        order:1;
        flex-basis: 100%;
        margin: 20px 0;
 };
`;
export const StyledOption = styled.option`
    background-color: ${({ theme }) => theme.color.Black};
    color: ${({ theme }) => theme.color.White};
    font-size: 14px;
    border-radius: 5px;
`;