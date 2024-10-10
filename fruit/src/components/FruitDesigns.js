import React from 'react';
import Gallery from './Gallery';

import fruitImage1 from '../assets/barmitzva.jpg' 
import fruitImage2 from '../assets/birthday.jpg'
import fruitImage3 from '../assets/pretty.jpg'
import fruitImage4 from '../assets/bar.jpg'

const FruitDesigns = () => {
  const fruitItems = [
    {
      original: fruitImage2,
      thumbnail: fruitImage2,
      description: 'עיצוב פירות מושלם 2',
      price: 750
    },
    {
      original: fruitImage3,
      thumbnail: fruitImage3,
      description: 'עיצוב פירות מושלם 3',
      price: 250
    },
    {
      original: fruitImage4,
      thumbnail: fruitImage4,
      description: 'עיצוב פירות מושלם 4',
      price: 620
    },
 
  ];

  return (
    <div>
      <h2>עיצובי פירות</h2>
      <Gallery items={fruitItems} />
    </div>
  );
};

export default FruitDesigns;
