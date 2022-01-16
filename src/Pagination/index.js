import { StyledPagination } from "./styled";

export const Pagination = ({info, setPage, page}) => {

    const changePage = (page) => {
        setPage(page.selected +1)
    };
    return (
        <StyledPagination
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={info?.pages}
            onPageChange={changePage}
            forcePage={page === 1 ? 0 : page -1}
            marginPagesDisplayed={1}
            pageRangeDisplayed={1}
        />
    );
};