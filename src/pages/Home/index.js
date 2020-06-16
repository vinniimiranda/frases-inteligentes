import React, { useState, useEffect } from 'react';
import { API } from '../../services/api';

export default function Home ({ history }) {
  const [authors, setAuthors] = useState([]);
  const [filter, setFilter] = useState('')

  useEffect(() => {
    API.get('/authors').then(({ data }) => setAuthors(data));
  }, []);

  function handleClick (id) {
    history.push(`/phrases/${id}`);
  }

  function handleFilterInput (e) {
    setFilter(e.target.value.toLowerCase())
  }

  return (
    <div>
      <div className='title'>
        <h1>Frases Inteligentes</h1>
      </div>
      <div className="search-div">
        <input className="input-search"
          onChange={handleFilterInput}
          placeholder="Filtar autor" />
      </div>
      <div className='grid'>
        {authors.filter(author => author.name.toLowerCase().match(filter)).map((author) => (
          <div key={author.id} className='author-card'>
            <img src={author.image_url} alt={author.name} className='author-image' />
            <span className='author-name'>{author.name}</span>
            <button className='btn' onClick={() => handleClick(author.id)}>
              Ver frases
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
