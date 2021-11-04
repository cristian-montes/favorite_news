import React from 'react';


export default function NewsArticle({title, author, description, image, articleURL}){
    return (
        <figure>
            <img src={image} alt={author} height={200} width={200} />
            <div>
                <p>{title}</p>
                <p>{description}</p>
                <p>By {author}</p>
                <p> {articleURL}</p>   {/* use this link div or img link to article */}
            </div>
        </figure>
    )
}

