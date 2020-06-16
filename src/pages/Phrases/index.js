import React, { useState, useEffect } from 'react';
import { API } from '../../services/api';

export default function Phrases({ match, history }) {
  const { id } = match.params;

  const [author, setAuthor] = useState({});

  useEffect(() => {
    API.get(`/authors/${id}`).then(({ data }) => {
      setAuthor(data);
    });
  }, [id]);

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
        <h2>{author.name}</h2>
      </div>

      <div className='phrases'>
        {author.phrases?.pt?.map((phrase) => (
          <div
            className='phrase'
            key={phrase}
            onClick={() => {
              navigator.clipboard.writeText(phrase);
            }}
          >
            <span>"{phrase}"</span>
            <span
              className='copy'
              onClick={() => {
                navigator.clipboard.writeText(phrase);
              }}
            >
              Copiar
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
