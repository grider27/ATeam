/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './style.css';
import Title from '../Title';

// var starContainer = document.getElementById('stars');
// var stars = Array.prototype.slice.call(starContainer.children);
// var totalStars = stars.length;
// var rated = document.getElementById('rated');

// starContainer.addEventListener('click', function (e) {
//   var index = stars.indexOf(e.target);
//   var count = (count = totalStars - index);
//   stars.forEach((el) => el.classList.remove('is-selected'));
//   e.target.classList.add('is-selected');

//   rated.textContent = 'You have rated ' + count + ' stars';
// });

export default function Stars() {
  return (
    <React.Fragment>
      <Title>Stars</Title>
      <div>
        <svg style={{ display: 'none' }}>
          <symbol id="star" viewBox="0 0 98 92">
            <title>star</title>
            <path
              stroke="#000"
              strokeWidth={5}
              d="M49 73.5L22.55 87.406l5.05-29.453-21.398-20.86 29.573-4.296L49 6l13.225 26.797 29.573 4.297-21.4 20.86 5.052 29.452z"
              fillRule="evenodd"
            />
          </symbol>
        </svg>
        <div style={{ display: 'inline-block' }}>
          <div id="stars" className="stars">
            <a className="star" href="#">
              <svg>
                <use xlinkHref="#star" />
              </svg>
            </a>
            <a className="star" href="#">
              <svg>
                <use xlinkHref="#star" />
              </svg>
            </a>
            <a className="star" href="#">
              <svg>
                <use xlinkHref="#star" />
              </svg>
            </a>
            <a className="star" href="#">
              <svg>
                <use xlinkHref="#star" />
              </svg>
            </a>
            <a className="star" href="#">
              <svg>
                <use xlinkHref="#star" />
              </svg>
            </a>
            <a className="star" href="#">
              <svg>
                <use xlinkHref="#star" />
              </svg>
            </a>
            <a className="star" href="#">
              <svg>
                <use xlinkHref="#star" />
              </svg>
            </a>
            <a className="star" href="#">
              <svg>
                <use xlinkHref="#star" />
              </svg>
            </a>
            <a className="star" href="#">
              <svg>
                <use xlinkHref="#star" />
              </svg>
            </a>
            <a className="star" href="#">
              <svg>
                <use xlinkHref="#star" />
              </svg>
            </a>
          </div>
        </div>
        <div id="rated" />
      </div>
    </React.Fragment>
  );
}
