import React, { Component} from 'react';
import NewsArticleList from '../components/newsArticles/NewsArticleList';
import NewsArticleSearch from '../components/newsArticles/NewsArticleSearch';
import LinearProgress from '@material-ui/core/LinearProgress';
import { fetchArticles } from '../services/fetchArticlesAPI';
import { Loading, MainContainer } from './NewsArticlesContainerStyles';




export default class NewsContainer extends Component {
    state= {
        loading: true,
        articles:[],
        newsName:'Top',
    }

    async componentDidMount(){
        const articles = await fetchArticles('good');
        this.setState({articles, loading:false})
    }

    handleNewsNameChange = (event)=>{
        this.setState({newsName: event.target.value});
    }


    handleSubmit =async (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const articles = await fetchArticles(this.state.newsName);
        this.setState({articles, loading:false})
        // await this.setState({newsName:''})

    }


    render(){
        const{loading, articles, newsName} = this.state;
        const newsTitle = newsName.toUpperCase();
        return (
            <MainContainer>
            {loading ? <Loading>Loading...<LinearProgress/></Loading>
            :(
                <div>
                    <NewsArticleSearch
                        newsTitle={newsTitle}
                        newsName={newsName}
                        onHandleNewsNameChange={this.handleNewsNameChange}
                        onHandleSubmit={this.handleSubmit}
                    />
                    <NewsArticleList articles={ articles }/>
                </div>
            )}

        </MainContainer>
        )
    }
}