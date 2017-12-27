import React from 'react';

const ArticleList = props => {
  if (!props.articles) {
    return (
      <div className="article-preview">Loading....</div>
    );
  }

  if (props.articles.lenth === 0) {
    return (
      <div className="article-preview">
        No articles are here yet....
      </div>
    );
  }

  return (
    <div className="article-preview">
      {
        props.articles.map(article => {
          return (
            <h2>{article.title}</h2>
          )
        })
      }
    </div>
  );

};

export default ArticleList;
