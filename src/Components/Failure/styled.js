import styled from "styled-components";

export const StyledDiv = styled.div`
    max-width: 800px;
    margin: 0 auto;
`;
export const StyledInformation = styled.p`
    color: ${({theme}) => theme.color.Conifer};
    font-size: 18px;
    letter-spacing: 1px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 14px;
 };
`;
export const StyledImage = styled.img`
    max-width: 250px;
    width: 100%;
`;
export const StyledName = styled.span`
    display: inline-block;
    border-bottom: 2px solid ${({theme}) => theme.color.EasternBlue}; 
    padding: 1px 10px;
    color: ${({theme}) => theme.color.White};
    text-transform: uppercase;
`;