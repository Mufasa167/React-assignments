// Grandfather.js
import React from 'react';
import Father from './Father';
import { GiftProvider } from './GiftContext';

const Grandfather = () => {
  return (
    <div>
      <h2>Grandfather</h2>
      <GiftProvider>
        <Father />
      </GiftProvider>
    </div>
  );
};

export default Grandfather;
