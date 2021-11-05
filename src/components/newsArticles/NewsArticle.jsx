import React from 'react';
import { Author, Container, FullStory, Image, Title } from './NewsArticleStyles';


export default function NewsArticle({title, author, description, image, articleURL}){
    return (
        <Container>
            <a href={articleURL} target={"_blank"} rel="noreferrer"> 
                <Image src={image} alt={author} height={200} width={200} />
            </a>

            <div>
                <Title>{title}</Title>
                <p>{description}</p>
                <Author>By {author}</Author>
                <a href={articleURL} target={"_blank"} rel="noreferrer" style={{textDecoration: "none"}} > 
                    <FullStory> View Full Story </FullStory>
                </a>
            </div>
        </Container>
    )
}

