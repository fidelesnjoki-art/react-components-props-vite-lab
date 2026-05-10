import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

// Main App component that renders the entire blog site
// It imports blog data and passes it down as props to child components
function App() {
  return (
    <div className="App">
      {/* Render the header with the blog name */}
      <Header name={blogData.name} />
      {/* Render the about section with image and description */}
      <About image={blogData.image} about={blogData.about} />
      {/* Render the list of articles */}
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
    