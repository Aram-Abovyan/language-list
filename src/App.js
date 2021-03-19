import React from 'react';
import LanguageList from './components/LanguageList';
import Grid from '@material-ui/core/Grid';
import Input from './components/Input';
import { listData } from './data/listData';

function App() {
  const [languageList, setLanguageList] = React.useState(listData);

  return (
    <Grid
      container
      justify="center"
    >

      <Grid
        item
        xs={4}
      >
        <Input
          setLanguageList={setLanguageList}
          listData={listData}
        />
        <LanguageList
          setLanguageList={setLanguageList}
          listData={listData}
        />

      </Grid>
      
    </Grid>
  );
}

export default App;
