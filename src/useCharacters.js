import { useState, useEffect } from "react";
import axios from 'axios';

export const useCharacters = () => {
    const [characters, setCharacters] = useState({ state: "loading" });
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("");
    const [gender, setGender] = useState("");
    const [species, setSpecies] = useState("");
    const { data, info } = characters;
    const api = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

    useEffect(() => {
        const getCharacters = async () => {
            try {
                const { data } = await axios.get(api);
                setCharacters(
                    {
                        data: data.results,
                        info: data.info,
                        state: "success"
                    }
                );
            }
            catch {
                setCharacters({
                    state: "error"
                });
            };
        };
        getCharacters();
    }, [api]);

    return { data, info, page, setPage, setSearch, setStatus, setGender, setSpecies, search, characters };
};



