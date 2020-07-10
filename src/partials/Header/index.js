import React from "react";
import {Wrapper, Logo, childStyles} from './style';
import {ContentMiddle} from '../../styles/style';

const Header = ({styles = {}}) => {
  return (
    <Wrapper styles={styles.Wrapper}>
      <ContentMiddle styles={childStyles.ContentMiddle}>
          <Logo>Index</Logo>
      </ContentMiddle>
    </Wrapper>
  )
};

export default Header;