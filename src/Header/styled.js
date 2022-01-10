import styled from "styled-components";

export const StyledImage = styled.img`
    max-width: 600px;
    width: 100%;
    margin-top: -40px;
`;
export const StyledParagraph = styled.p`
    font-family: 'Creepster', cursive;
    color: ${({ theme }) => theme.color.White};
    max-width: 500px;
    font-size: 40px;
    margin: 0 auto 30px;
    text-align: right;
`;