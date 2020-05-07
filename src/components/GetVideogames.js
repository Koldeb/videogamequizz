import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetVideogames = () => {
  const [videoGameList, setvideoGameList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios({
        method: 'POST',
        url: 'https://api-v3.igdb.com/games/',
        headers: {
          Accept: 'application/json',
          'user-key': '01f83fd506d2bae53f8ebe058657d308',
          'Access-Control-Allow-Origin': '*'
        },
        data: 'fields name; limit 10;'
      })
        .then(response => {
          console.log(response.data);
        })
        .catch(err => {
          console.error(err);
        });
      setvideoGameList(res);
    }
    fetchData();
  }, []);
  console.log(videoGameList);

  return <div>Get Video Games</div>;
};

export default GetVideogames;
