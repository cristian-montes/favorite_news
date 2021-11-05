import React from 'react';
import NewsArticle from './NewsArticle';
import { Container } from './NewsArticleListStyles';


export default function NewsArticleList({articles}){
    const articleList = articles.map(({title, author, description,urlToImage, url}) => (
        <li key={`${title}-${author}`}> 
            <NewsArticle
                title={title}
                author= {author}
                description={description}
                image={urlToImage}
                articleURL={url}
            />
        </li>
    ));


    return (
        <Container aria-label="articles">{articleList}</Container>
   )
}