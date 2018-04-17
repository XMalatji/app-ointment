import React from 'react';
import ArticleList from './ArticleList';

import DataApi from '../DataApi';
import { data } from '../testData';

const api = new DataApi(data);

class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors()
    };

  }

  //look up author ,passed down tree as actions

  articleActions = {
    lookupAuthor : (authorId) => 
      this.state.authors[authorId]
    
  };

  //////
  /////
  ////
  render() {
    return (
      <div>
        <ArticleList
          articles={this.state.articles}
          articleActions={this.articleActions}
        />
      </div>
    );
  }
}

export default App;