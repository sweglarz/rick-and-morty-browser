import styled from "styled-components";

export const StyledButtonWrapper = styled.div`
    display: flex;
    max-width: 250px;
    justify-content: space-around;
    margin: 20px auto;
`

export const StyledButtons = styled.button`
    padding: 9px 14px;
    width: 100px;
    background-color: #22a2bd;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: 300ms;

    &:hover{
    background-color: #1f91aa;
    }
`