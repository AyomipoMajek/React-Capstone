import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import '../styles/Card.css';

function Card() {
  const { cardId } = useParams();
  const data = useSelector((state) => state.Data.info);
  const card = data.find((dat) => dat.id === parseInt(cardId, 10));

  return (
    <div className="card">
      {/* <div className="header Hcard">
        <p className="date2">{card.date}</p>
      </div> */}
      <div className="thehead">
        <div className="subhead" />
        <div className="breakdown">
          General Revenue:
          <span>
            {' '}
            {card.date}
          </span>
        </div>
      </div>
      <p className="title2">Country and Breakdown:</p>
      <ul>
        {card.CHINA || card['C N'] ? (
          <li className="country">
            China:
            <span>
              {' '}
              {card.CHINA || card['C N']}
            </span>
          </li>
        ) : null }
        {card['UNITED STATES'] || card['U S'] ? (
          <li className="country">
            {' '}
            United States:
            <span>
              {' '}
              {card['UNITED STATES'] || card['U S']}
            </span>
          </li>
        ) : null}
        {card['Other Countries'] ? (
          <li className="country">
            {' '}
            Other Countries:
            <span>
              {' '}
              {card['Other Countries']}
            </span>
          </li>
        ) : null}
        {card.Americas ? (
          <li className="country">
            Americas:
            <span>
              {' '}
              {card.Americas}
            </span>
          </li>
        ) : null }
        {card['Asia-Pacific'] ? (
          <li className="country">
            Asia-pacific:
            {card['Asia-Pacific']}
          </li>
        ) : null}
        {card.Europe ? (
          <li className="country">
            Europe:
            <span>
              {' '}
              {card.Europe}
            </span>
          </li>
        ) : null}
        {card.Japan ? (
          <li className="country">
            Japan:
            <span>
              {' '}
              {card.Japan}
            </span>
          </li>
        ) : null}
        <li className="total">
          {' '}
          Total:
          <span>
            {' '}
            {card.total}
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Card;
