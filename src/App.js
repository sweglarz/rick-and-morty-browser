import { Buttons } from './Buttons';
import { Characters } from './Characters';
import { Container } from './Container';
import { Header } from "./Header";
import { useCharacters } from "./useCharacters";

function App() {
  const { data, setPage } = useCharacters();

  return (
    <>
      <Header />
      <Container>
        <Buttons setPage={setPage} />
        <Characters data={data} />
        <Buttons setPage={setPage} />
      </Container>
    </>
  );
}

export default App;