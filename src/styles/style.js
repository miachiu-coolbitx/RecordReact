import styled from 'styled-components';

export const childStyles = {
  KitzeInfo: {
    home: {
      Wrapper: `
        color: white;
      `,
    },
    other: {
      Title: `
        color: #848484;
      `,
      Description: `
        color: gray
      `,
      SocialIcon: {
        Icon: `
          color: gray;
        `,
      },
      Image: `
        box-shadow: 0 0 9px 1px rgba(49, 49, 49, 0.17);
      `,
    },
  },
  Header: {
    home: {
      Wrapper: `
        background-color: #2b304c;
      `,
    },
    other: {
      Wrapper: `
        background-color: #333959;
      `,
    },
  },
};

export const Wrapper = styled.div`
  position: relative;
`;

export const ContentMiddle = styled.div`
  width: 100%;
  max-width: 960px;
  margin: auto;
  ${(props) => props.styles}
`;

export const ListItem = styled.li`
  font-size: 18px;
  list-style-type: none;
  margin: 10px 0;
  font-weight: 100;
  line-height: 25px;
`;

export const UnderlinedLink = styled.a`
  color: white;
  text-decoration: none;
  margin-right: 15px;
  ${(props) =>
    props.href &&
    `
      border-bottom: 1px dashed rgba(255, 255, 255, 0.6);
    `}
  padding-bottom: 1px;
`;

export const Section = styled.section`
  margin-bottom: 100px;
`;

export const SectionTitle = styled.h3`
  position: relative;
  padding-bottom: 5px;
  margin: 0 0 20px 0;
  font-size: 24px;
  color: white;
  font-weight: 300;
  &:first-of-type:before {
    top: -1px;
  }
`;

export const UnorderedList = styled.ul`
  padding: 0;
`;
