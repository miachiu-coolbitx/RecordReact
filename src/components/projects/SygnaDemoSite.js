import React from 'react';
import { UnderlinedLink } from '../../styles/style';
import { Point } from '../Project/style';
import Project from '../Project/index';

const SygnaDemoSite = () => (
  <Project title="Sygna" href="https://sygna.io/">
    <Point>
      <UnderlinedLink href="https://demosite.sygna.io/" target="_blank">
        Demo webiste V2
      </UnderlinedLink>
      May - Jul, 2020
    </Point>
    <Point>
      <UnderlinedLink href="#" target="_blank">
        React Form V2
      </UnderlinedLink>
      May, 2020
    </Point>
    <Point>
      <UnderlinedLink href="#" target="_blank">
        React Form V1
      </UnderlinedLink>
      Apr, 2020
    </Point>
  </Project>
);

export default SygnaDemoSite;
