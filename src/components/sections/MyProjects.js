import React from 'react';
import { Section, UnorderedList } from '../../styles/style';

//projects
//import FejsMK from 'components/projects/FejsMK';
import SygnaDemoSite from '../projects/SygnaDemoSite';

const MyProjects = () => (
  <Section id="projects" className="animated fadeInDown">
    {/* <SectionTitle> Apr - July, 2020 </SectionTitle> */}
    <UnorderedList>
      <SygnaDemoSite />
    </UnorderedList>
  </Section>
);

export default MyProjects;
