import React, { useEffect, useState } from "react";
import "./movieDetails.css";
import { useParams } from "react-router-dom";

const Details = () => {
  let { id } = useParams();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  fetch("https://pr-movies.herokuapp.com/api/movies/" + id)
    .then((res) => res.json())
    .then((json) => {
      setTitle(json.title);
      setImage(json.image);
      setContent(json.content);
    });

  return (
    <div className="details_container">
      <p className="details_title">{title}</p>
      <img src={image} className="details_poster" alt="poster" />
      <p className="details_description">{content}</p>
    </div>
  );
};

export default Details;
