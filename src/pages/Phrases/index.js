import React, { useState, useEffect } from 'react';
import { API } from '../../services/api';

export default function Phrases({ match, history }) {
  const { author_id } = match.params;

  const [author, setAuthor] = useState({});

  useEffect(() => {
    API.get(`/authors/${author_id}`).then(({ data }) => {
      setAuthor(data);
    });
  }, [author_id]);

  function handleBack() {
    history.push('/');
  }

  return (
    <div className='author-page'>
      <div>
        <button className='btn' onClick={handleBack}>
          Voltar
        </button>
      </div>
      <div className='author-info'>
        <img className='author-photo' src={author.image_url} alt={author.author} />
        <h2>{author.author}</h2>
      </div>

      <div className='phrases'>
        {author.phrases?.map((phrase) => (
          <div className='phrase' key={phrase}>
            "{phrase}"
          </div>
        ))}
      </div>
    </div>
  );
}
