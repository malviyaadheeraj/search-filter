import React, { useState, useEffect } from "react";
import posts from "./postArray";
import Posts from "./Posts";
import "./App.css";
const postsPerPage = 3;
let arrayForHoldingPosts = [];

const App = () => {
  const [postsToShow, setPostsToShow] = useState([]);
  const [next, setNext] = useState(3);

  const loopWithSlice = (start, end) => {
    const slicedPosts = posts.slice(start, end);
    arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
    setPostsToShow(arrayForHoldingPosts);
  };

  useEffect(() => {
    loopWithSlice(0, postsPerPage);
  }, []);

  const handleShowMorePosts = () => {
    loopWithSlice(next, next + postsPerPage);
    setNext(next + postsPerPage);
  };

  return (
    <div>
      <Posts postsToRender={postsToShow} />
      <button onClick={handleShowMorePosts}>Load more</button>
    </div>
  );
};

export default App;
