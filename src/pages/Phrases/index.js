import React, { useState, useEffect } from 'react';
import { API } from '../../services/api';
import { FiCopy } from 'react-icons/fi';
import { ReactComponent as Loader } from '../../assets/icons/spinner-of-dots.svg';

export default function Phrases({ match, history }) {
  const { id } = match.params;

  const [data, setData] = useState({});

  useEffect(() => {
    API.get(`/authors/${id}`).then(({ data }) => {
      setData(data);
    });
  }, [id]);

  function handleBack() {
    history.push('/');
  }

  return data?.author?._id ? (
    <div className='author-page'>
      <div className='go-back'>
        <button className='btn' onClick={handleBack}>
          Voltar
        </button>
      </div>
      <div className='author-info'>
        <img className='author-photo' src={data?.author?.image_url} alt={data?.author?.name} />
        <h2>{data?.author?.name}</h2>
      </div>

      <div className='phrases'>
        {data.phrases?.map((phrase) => (
          <div className='phrase' key={phrase._id}>
            <span>"{phrase.value}"</span>
            <span
              className='copy'
              onClick={() => {
                navigator.clipboard.writeText(`"${phrase.value}" - ${data.author.name}`);
              }}
            >
              <FiCopy size={20} />
              <span>Copiar</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className='loading-div'>
      <Loader size={80} className='loading' />
    </div>
  );
}
