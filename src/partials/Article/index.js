import React from 'react';
//styled
import {Image, Title, Wrapper} from './style';
//images
import author from '../../img/author.png';
import { Logo } from '../Header/style';

const Article = ({styles = {}}) => {
    return (
        <Wrapper styles={styles.Wrapper}>
            <Image src={author} alt="author" styles={styles.Image}/>
            <Title>Make some stuff of React</Title>
        </Wrapper>
    )
};

export default Article;