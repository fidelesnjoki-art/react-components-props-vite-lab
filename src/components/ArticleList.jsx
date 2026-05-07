import React from "react";
import Article from "./Article";

// ArticleList component renders a list of Article components
// It maps over the 'posts' array and passes each post's data as props to Article
function ArticleList({ posts }) {
  return (
    <main>
      {/* Map each post to an Article component, using post.id as key for React's reconciliation */}
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;
