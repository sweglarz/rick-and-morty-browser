import styled from "styled-components";

export const StyledDiv = styled.div`
    max-width: 800px;
    margin: 0 auto;
`;
export const StyledInformation = styled.p`
    color: ${({ theme }) => theme.color.Conifer};
    font-size: 18px;
    letter-spacing: 1px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 14px;
 };
`;
export const StyledImage = styled.img`
    max-width: 350px;
    width: 100%;
`;