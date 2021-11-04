import React, { Component} from 'react';
import NewsArticleList from '../components/newsArticles/NewsArticleList';
import { fetchArticles } from '../services/fetchArticlesAPI';




export default class NewsContainer extends Component {
    state= {
        loading: true,
        articles:[],
    }

    async componentDidMount(){
        const articles = await fetchArticles(this.state.newsName);
        this.setState({articles, loading:false})
    }



    render(){
        const{loading, articles, newsName} = this.state;
        // const newsTittle = newsName.toUpperCase();
        return (
            <NewsArticleList articles={articles}/>
        )
    }
}