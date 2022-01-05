import { Buttons } from './Buttons';
import { Characters } from './Characters';
import { Container } from './Container';
import { useCharacters } from "./useCharacters"

function App() {

  const {data, setPage} = useCharacters();

  return (

    <>
      <h1>Rick And Morty Characters</h1>
      <Container>
        <Buttons setPage={setPage} />
        <Characters data={data}/>
      </Container>
    </>

  );
}

export default App;
