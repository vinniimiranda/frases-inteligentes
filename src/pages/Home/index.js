import React, { useState, useEffect } from 'react';
import { API } from '../../services/api';

export default function Home({ history }) {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    API.get('/authors').then(({ data }) => setAuthors(data));
  }, []);

  function handleClick(author_id) {
    history.push(`/phrases/${author_id}`);
  }

  return (
    <div>
      <div className='title'>
        <h1>Frases Inteligentes</h1>
      </div>
      <div className='grid'>
        {authors.map((author) => (
          <div className='author-card'>
            <img src={author.image_url} alt={author.author} className='author-image' />
            <span className='author-name'>{author.author}</span>
            <button className='btn' onClick={() => handleClick(author.author_id)}>
              Ver frases
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
