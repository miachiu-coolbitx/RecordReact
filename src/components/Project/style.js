import styled from 'styled-components';
import colors from '../../styles/colors';
import { ListItem } from '../../styles/style';
import { UnderlinedLink } from '../../styles/style';

export const Wrapper = styled(ListItem)`
  margin: 35px 0;
`;

export const Link = styled(UnderlinedLink)`
  margin-bottom: 15px;
  padding-bottom: 10px;
  display: inline-block;
`;

export const Points = styled.div``;

export const Title = styled.div`
  position: relative;
  font-size: 30px;
  font-weight: 300;
  &:before {
    content: '';
    width: 25px;
    height: 25px;
    border-radius: 100%;
    color: white;
    background-color: #66dbff;
    position: absolute;
    left: -65px;
    top: 0px;
    border: 5px solid #333959;
  }
`;

export const Point = styled.p`
  position: relative;
  padding: 0;
  margin: 15px 0;
  line-height: 25px;
  font-size: 16px;
  color: ${colors.font};
  &:before {
    content: '';
    width: 15px;
    height: 15px;
    border-radius: 100%;
    color: white;
    background-color: white;
    position: absolute;
    left: -60px;
    top: 4px;
    border: 4px solid #333959;
  }
`;
