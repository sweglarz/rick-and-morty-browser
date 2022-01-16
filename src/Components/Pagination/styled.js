import ReactPaginate from "react-paginate";
import styled from "styled-components";

export const StyledPagination = styled(ReactPaginate).attrs({
    activeClassName: "active",
    activeLinkClassName: "activeLink",
    breakClassName: "dots",
    pageClassName: "page",
    pageLinkClassName: "pageLink",
    previousLinkClassName: "previousLink",
    nextLinkClassName: "nextLink"
})`
    display: flex;
    color: #fff;
    flex-direction: row;
    justify-content: space-evenly;
    list-style-type: none;
    padding: 0 20px;
    margin: 40px auto 30px;
    max-width: 500px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        padding: 0;
        font-size: 12px;
    };
    @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}px) {
        font-size: 10px;
    };

  .active{
      background-color: ${({ theme }) => theme.color.Limeade};
};
  
  .page{
      border-radius: 5px;
      margin: 0;
};

  .pageLink{
      display: block;
      width: 40px;
      padding: 5px;
      border-radius: 5px;
      border: 1px solid ${({ theme }) => theme.color.Limeade};
      cursor: pointer;
      
      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 30px;
        padding: 3px;
    };
};

  .pageLink:hover{
      background-color: ${({ theme }) => theme.color.Conifer}
};
  .activeLink:hover{
      background-color: ${({ theme }) => theme.color.Limeade}
};

  .dots{
      display: flex;
      align-items: flex-end;
      letter-spacing: 3px;
      cursor: pointer;
};

  .previous{
      background-color: ${({ theme }) => theme.color.Limeade};
      cursor: pointer;
      border-radius: 5px;
      transition: 300ms;
      &:hover{
        background-color: ${({ theme }) => theme.color.JapaneseLaurel};
      }
};
  .previous.disabled{
      background-color: ${({ theme }) => theme.color.DustyGray};
      cursor: initial;
};
  .previousLink{
      display: inline-block;
      width: 100%;
      height: 100%;
      padding: 5px 10px;
};
  .next{ 
      background-color: ${({ theme }) => theme.color.Limeade};
      cursor: pointer;
      border-radius: 5px;
      transition: 300ms;
      &:hover{
        background-color: ${({ theme }) => theme.color.JapaneseLaurel};
      }
};
  .next.disabled{
      background-color: ${({ theme }) => theme.color.DustyGray};
      cursor: initial;
};
  .nextLink{
      display: inline-block;
      width: 100%;
      height: 100%;
      padding: 5px 10px;
};
`