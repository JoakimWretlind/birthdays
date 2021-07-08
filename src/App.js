import { useState } from 'react';
import { GlobalStyle } from './globalStyle';
import data from './components/data';
import List from './components/List';
import {
  MainContainer,
  PeopleSection,
  MainH3,
  ClearButton
} from './components/style';

function App() {
  const [people, setPeople] = useState(data);
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <PeopleSection>
          <MainH3>{people.length} birthdays</MainH3>
          <List people={people} />
          <ClearButton onClick={() => setPeople([])}>clear all</ClearButton>
        </PeopleSection>
      </MainContainer>
    </>
  );
}

export default App;

