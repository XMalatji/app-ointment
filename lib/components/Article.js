import React from 'react';

const styles = {
  article: {
    paddingTop:20,
    marginBottom: 20,
    border:'1px solid #ccc'
  },
  title: {
    fontWeight: 'bold',
  },
  date: {
    color:'red'
  },
  author: {

  },
  body:{
    marginTop:20
  }
};

const dateDisplay = (dateString) =>
  new Date(dateString).toDateString();

class Article extends React.PureComponent {
  render() {
    const {article , actions} = this.props;
    const author = actions.lookupAuthor(article.authorId);

    return(
      <div style={styles.article}>
        <div style={styles.title}> {article.title} </div>
        <div style={styles.date}> 
          {dateDisplay(article.date)} 
        </div>
        <div> 
          <a href={author.website}>
            {author.firstName} 
          </a>
          
        </div> 
  
        <div style={styles.body}> {article.body} </div>
        
    
      </div>
    );
  }

}

export default Article;