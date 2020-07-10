import React from 'react';
//meta tags
import Helmet from 'react-helmet';
import { Wrapper } from './style';
import MyProjects from '../../components/sections/MyProjects';

const Content = () => {
  return (
    <Wrapper>
      <Helmet title="React Record Site" />
      <MyProjects />
    </Wrapper>
  );
};

export default Content;
