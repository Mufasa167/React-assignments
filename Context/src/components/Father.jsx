// Father.js
import React from 'react';
import Son from './Son';
import { useGiftContext } from './GiftContext';

const Father = () => {
  const { addGift } = useGiftContext();

  // Set an example gift to the context
  React.useEffect(() => {
    addGift('Example Gift');
  }, [addGift]);

  return (
    <div>
      <h2>Father</h2>
      <Son />
    </div>
  );
};

export default Father;
