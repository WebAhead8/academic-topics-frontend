import React, { useState } from "react";
import Nav from "../../components/navBar";
import "./style.css";
import { useHistory } from "react-router-dom";

function Blog() {
  const [content, setContent] = React.useState("");
  const [allPosts, setAllPosts] = React.useState([]);
  const history = useHistory();
  function handlContentChange(event) {
    setContent(event.target.value);
  }
  function handlContentSubmit() {
    if (content === "") return;
    setAllPosts((prevstate) => {
      return [...prevstate, content];
    });
    setContent("");
  }
  function veiwBlog() {
    history.push("/blog/1");
  }

  return (
    <main>
      <div className="App">
        <Nav />
        <legend className="blog">مدونة</legend>
        <legend className="sharing">مشاركه جديدة:</legend>
        <div className="relative">
          <textarea onChange={handlContentChange} value={content}></textarea>
          <div className="absolute">
            <img src="/plus.png" onClick={handlContentSubmit} />
          </div>
        </div>
        <legend className="sharing">مشاركات:</legend>
        <ul className="post">
          {allPosts.map((eachPost) => {
            return <li onClick={veiwBlog}> {eachPost} </li>;
          })}
        </ul>
      </div>
    </main>
  );
}
export default Blog;
