import styled from "styled-components";

export const Container = styled.div`
    width:40rem;
    min-height: 20rem;
    border: white solid .08px;
    margin: 1rem;
    border-radius: .6rem;
    color:white;
    font: Arial;
    padding: 1rem;
    display:flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;`
    ;

export const Image = styled.img`
    width:10rem;
    height: 9rem;
    object-fit: cover;
    border-radius: .6rem;
    justify-content: flex-end;
`

export const Title = styled.h3`
    font-weight:bold;
    font-size: 24px;
`

export const Author = styled.p`
    font-style: italic;
`

export const FullStory = styled.h4`
    font-style: italic;
    color:#8ab4f8;
    text-decoration: none;
    &:hover { 
        color: pink
    }
`

export const TitleDiv = styled.div`
    width: 70%;
    min-height: 90%;
    margin: .1rem;
    
`;