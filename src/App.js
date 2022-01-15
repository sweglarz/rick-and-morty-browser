import { Pagination } from './Pagination';
import { Characters } from './Characters';
import { Container } from './Container';
import { Header } from "./Header";
import { Search } from './Search';
import { useCharacters } from "./useCharacters";

function App() {
  const { data, info, page, setPage, setSearch, setStatus, setGender, setSpecies, search } = useCharacters();

  return (
    <>
      <Header />
      <Container>
        <Search
          setSearch={setSearch}
          setStatus={setStatus}
          setPage={setPage}
          setGender={setGender}
          setSpecies={setSpecies} />
        <Characters
          data={data}
          search={search}
        />
        <Pagination
          page={page}
          info={info}
          setPage={setPage}
        />
      </Container>
    </>
  );
};

export default App;