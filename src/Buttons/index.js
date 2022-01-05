
export const Buttons = ({setPage}) => {

    const nextPage = () => {
        setPage(page => page +1);
    }

    const previousPage = () => {
        setPage(page => page -1);
    }
    return (
        <div>
            <button onClick={previousPage}>Previous</button>
            <button onClick={nextPage}>Next</button>
        </div>
    )
} 