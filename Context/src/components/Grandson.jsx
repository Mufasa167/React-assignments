// Grandson.js
import React from 'react';
import { useGiftContext } from './GiftContext';

const Grandson = () => {
  const { gifts } = useGiftContext();

  return (
    <div>
      <h2>Grandson</h2>
      <div>
        <strong>Gifts:</strong>
        <ul>
          {gifts.map((gift, index) => (
            <li key={index}>{gift}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Grandson;
