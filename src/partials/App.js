import React from 'react';
import Header from './Header/index';
import Article from './Article/index';
import Content from './Content/index';
import { Wrapper, childStyles } from './Style';
import { ContentMiddle } from '../styles/style';
import Grid from '@material-ui/core/Grid';

const App = () => {
  return (
    <Wrapper>
      <Header />
      <ContentMiddle styles={childStyles.ContentMiddle}>
        <Grid container>
          <Grid item sm={3}>
            <Article />
          </Grid>
          <Grid item sm={9}>
            <Content />
          </Grid>
        </Grid>
      </ContentMiddle>
    </Wrapper>
  );
};

export default App;
