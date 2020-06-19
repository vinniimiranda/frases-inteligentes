import React, { useState, useEffect } from 'react';
import Particles from 'react-particles-js';

import { FiSearch } from 'react-icons/fi';

import { API } from '../../services/api';

export default function Home({ history }) {
  const [authors, setAuthors] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    API.get('/authors').then(({ data }) => setAuthors(data));
  }, []);

  function handleClick(id) {
    history.push(`/phrases/${id}`);
  }

  function handleFilterInput(e) {
    setFilter(e.target.value.toLowerCase());
  }

  return (
    <div>
      <Particles
        className='particles'
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: '#ffffff'
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 0,
                color: '#000000'
              },
              polygon: {
                nb_sides: 5
              },
              image: {
                src: 'img/github.svg',
                width: 100,
                height: 100
              }
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false
              }
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 4,
                size_min: 0.3,
                sync: false
              }
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: '#ffffff',
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              random: true,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 600
              }
            }
          },
          interactivity: {
            events: {
              onHover: {
                mode: 'repulse',
                enable: false
              }
            }
          }
        }}
      />
      <div className='title'>
        <h1>Frases Inteligentes</h1>
      </div>
      <div className='search-div'>
        <div className='input-search'>
          <FiSearch size={30} />
          <input className='input-search' onChange={handleFilterInput} placeholder='Pesquisar' />
        </div>
      </div>
      <div className='grid'>
        {authors
          .filter((author) => author.name.toLowerCase().match(filter))
          .map((author) => (
            <div key={author._id} className='author-card'>
              <img src={author.image_url} alt={author.name} className='author-image' />
              <span className='author-name'>{author.name}</span>
              <button className='btn' onClick={() => handleClick(author._id)}>
                Ver frases
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
