import { useState, useEffect } from "react";
import axios from 'axios';

export const useCharacters = () => {
    const [characters, setCharacters] = useState([{ state: "loading" }]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("");
    const [gender, setGender] = useState("");
    const [species, setSpecies] = useState("");
    const { data } = characters;
    const api = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

    useEffect(() => {
        const getCharacters = async () => {
            try {
                const { data } = await axios.get(api);
                setCharacters(
                    {
                        data: data.results,
                        info: data.info,
                        status: "success"
                    }
                );
            }
            catch {
                setCharacters({
                    state: "error"
                });
            };
        };
        setTimeout(getCharacters, 400);
    }, [api]);

    return { data, setPage, setSearch, setStatus, setGender, setSpecies, search};
};



