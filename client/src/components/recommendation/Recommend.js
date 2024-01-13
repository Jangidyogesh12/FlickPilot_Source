import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import "./style.css";

export default function Recommend() {
  const [text, setText] = useState("");
  const [movieName, setMovieName] = useState("");
  const { recommendations, path } = useFetch(
    `http://127.0.0.1:5000/recommend_movies/${movieName}`
  );
  const combinedRecommendation = Object.keys(recommendations).map((key) => ({
    imagePath: path[key],
    movieName: recommendations[key],
  }));

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setMovieName(text);
    }
  };

  useEffect(() => {
    setMovieName(text);
  }, []);

  return (
    <div>
      <div className="search_block">
        <input
          type="text"
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleEnter}
        />
      </div>

      <div className="recommended_movies">
        <ul>
          {combinedRecommendation.map(({ imagePath, movieName }, index) => (
            <div className="container" key={index}>
              <img src={imagePath} alt={movieName} className="container_img" />
              <li className="movie_name">{movieName}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
