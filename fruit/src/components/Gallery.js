import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../css/Gallery.css';
import OrderForm from './OrderForm'; // קומפוננטת הזמנה חדשה

const Gallery = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 2000); // כל 4 שניות

    return () => clearInterval(interval); // נקה את ה-interval כשהקומפוננטה מתפרקת
  }, [items.length]);

  const handleImageClick = (item) => {
    setSelectedItem(item); 
  };

  if (selectedItem) {
    return <OrderForm item={selectedItem} />; // הצגת קומפוננטת ההזמנה
  }

  return (
    <div className="gallery">
      <div className="image-gallery-container">
        <AnimatePresence>
          {items.map((item, index) =>
            index === currentIndex ? (
              <motion.div
                key={item.original}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 1.5 }}
                className="gallery-image-wrapper"
              >
                <img
                  src={item.original}
                  alt={item.description}
                  className="gallery-image"
                  onClick={() => handleImageClick(item)}
                />
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>

      <div className="gallery-items-info">
        {items.map((item, index) => (
          <div key={index} className="item-info">
            <img src={item.thumbnail} alt={item.description} className="thumbnail-image" />
            <span>{item.description}</span>
            <span>מחיר: {item.price}₪</span>
            <button onClick={() => handleAddToCart(item)}>
              <FontAwesomeIcon icon={faShoppingCart} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const handleAddToCart = (item) => {
  console.log(`הוספת ${item.description} לסל`);
};

export default Gallery;
