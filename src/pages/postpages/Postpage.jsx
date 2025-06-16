import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostsList from "./PostsList";

const PostPages = () => {
    return (
        <div className="container">
            <h1>questa è la pagina postpages</h1>
            <PostsList />
        </div>

    )
}

export default PostPages;