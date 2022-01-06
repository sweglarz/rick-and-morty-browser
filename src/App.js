import { Buttons } from './Buttons';
import { Characters } from './Characters';
import { Container } from './Container';
import { Header } from "./Header";
import { Search } from './Search';
import { useCharacters } from "./useCharacters";

function App() {
  const { data, setPage, setSearch } = useCharacters();

  return (
    <>
      <Header />
      <Container>
        <Search setSearch={setSearch}/>
        <Characters data={data} />
        <Buttons setPage={setPage} />
      </Container>
    </>
  );
}

export default App;