import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostContext from "../../context/postContext";
import { useContext } from "react";

const PostsList = () => {
  const {posts} = useContext(PostContext)

  return (
    <main>
      <div className="container">
        <h1>Vedi tutti i Post</h1>
        <div className="row row-cols-2 g-3">
          {posts.map((curPost) => (
            <div key={curPost.id} className="col">
              <div className="card">
                <div className="card-body">
                  <h4>
                    {curPost.id} - {curPost.title}
                  </h4>
                  <p>{curPost.body}</p>
                  <Link className="btn btn-warning" to={'/post/' + curPost.id}>
                    Dettagli
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default PostsList;