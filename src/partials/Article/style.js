import styled from 'styled-components';
import flex from '../../styles/flex';
import colors from '../../styles/colors';

export const Wrapper = styled.div`
  ${props => props.styles}
  ${flex.vertical}
  ${flex.centerVertical}
  padding: 20px 15px;
`;

export const Image = styled.img`
    width: 90px;
    height: 90px;
    object-fit: cover;
    object-position: 0 0;
    margin-top: 0px;
    border-radius: 100%;
    ${props => props.styles}
`;

export const Title = styled.h5`
    margin-top: 30px;
    text-align: center;
    font-size: 16px;
    font-weight: 300;
    color: ${colors.font};
    ${props => props.styles}
`;
