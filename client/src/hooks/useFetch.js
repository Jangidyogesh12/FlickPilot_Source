// here I have created my own custon hook to fetch the data
import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [recommendations, setRecomendation] = useState({});
  const [path, setPath] = useState({});
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network respose was not ok.....");
        }
        return res.json();
      })
      .then((data) => {
        setRecomendation(data.recommendation);
        setPath(data.path);
        console.log(data);
      })
      .catch((error) => {
        console.error("There was a problem in fetching the data: ", error);
      });
  }, [url]);

  return { recommendations, path };
}
