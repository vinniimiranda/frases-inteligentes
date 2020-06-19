import React, { useState, useEffect } from 'react';
import Particles from 'react-particles-js';
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
    <>
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
    </>
  ) : (
    <div className='loading-div'>
      <Loader size={80} className='loading' />
    </div>
  );
}
