import React from 'react';

import Article from './Article';

class ArticleList extends React.PureComponent {
  render() {

    return (
      <div>
        {Object.values(this.props.articles).map(article =>
          <Article
            key={article.id}
            article={article}
            actions={this.props.articleActions}
          />
        )}
      </div>
    );
  }
}

export default ArticleList;
