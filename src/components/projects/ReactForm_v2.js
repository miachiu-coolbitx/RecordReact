import React from 'react';
import { UnderlinedLink } from '../../styles/style';
import { Point } from '../Project/style';
import Project from '../Project/index';

const SygnaDemoSite = () => (
  <Project title="Sygna" href="https://demosite.sygna.io/">
    <Point>
      A tool for testing responsive websites on multiple devices at once
    </Point>
    <Point>
      Launched it{' '}
      <UnderlinedLink href="https://demosite.sygna.io/" target="_blank">
        in a day
      </UnderlinedLink>
    </Point>
  </Project>
);

export default SygnaDemoSite;
