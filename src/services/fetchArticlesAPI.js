export const fetchArticles = async (news) => {
    const res = await fetch(`https://newsapi.org/v2/everything?q=${news}&sortBy=popularity&apiKey=${process.env.REACT_APP_NEWS_KEY}`)
    const articles = await res.json();
    console.log('ARTICLES', articles.articles);
    return articles.articles
}


