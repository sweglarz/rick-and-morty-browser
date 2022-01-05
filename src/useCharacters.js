import { useState, useEffect } from "react";
import axios from 'axios';

export const useCharacters = () => {
    const [characters, setCharacters] = useState([{data: null}]);
    const [page, setPage] = useState(1);
    const { data } = characters;
    const api = `https://rickandmortyapi.com/api/character/?page=${page}`;

    // useEffect(() => {
    //     (async function () {
    //         try {
    //             const { data } = await axios.get(api);
    //             setCharacters(
    //                 {
    //                     data: data.results,
    //                 }
    //             );
    //         }
    //         catch {
    //             setCharacters([{
    //                 state: "error"
    //             }]);
    //         };
    //     })();
    // }, [api]);
 useEffect(() => {
        const getCharacters = async () => {
            try {
                const { data } = await axios.get(api);
                setCharacters(
                    {
                        data: data.results,
                    }
                );
            }
            catch {
                setCharacters({
                    state: "error"
                });
            };
        };
        setTimeout(getCharacters, 2000);
    }, [api]);
    return { data, setPage };
};



