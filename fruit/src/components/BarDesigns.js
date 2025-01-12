import React from 'react';
import Gallery from './Gallery';

const BarDesigns = () => {
  const barItems = [
    {
      original: 'path/to/bar1.jpg',
      thumbnail: 'path/to/bar-thumb1.jpg',
      description: 'עיצוב בר מושלם 1',
      price: 600
    },
    {
      original: 'path/to/bar2.jpg',
      thumbnail: 'path/to/bar-thumb2.jpg',
      description: 'עיצוב בר מושלם 2',
      price: 750
    },
    // עוד עיצובים
  ];

  return (
    <div>
      <h2>עיצובי בארים</h2>
      <Gallery items={barItems} />
    </div>
  );
};

export default BarDesigns;
