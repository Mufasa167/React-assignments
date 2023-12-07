// GiftContext.js
import React, { createContext, useContext, useState } from 'react';

const GiftContext = createContext();

export const GiftProvider = ({ children }) => {
  const [gifts, setGifts] = useState([]);

  const addGift = (gift) => {
    setGifts((prevGifts) => [...prevGifts, gift]);
  };

  return (
    <GiftContext.Provider value={{ gifts, addGift }}>
      {children}
    </GiftContext.Provider>
  );
};

export const useGiftContext = () => {
  return useContext(GiftContext);
};
