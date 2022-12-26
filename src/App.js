import React, { useState, useEffect } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
  faCircle,
  faCheckCircle,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';

const App = () => {
  // HINT: each "item" in our list names a name, a boolean to tell if its been completed, and a quantity
  const [items, setItems] = useState([
    { itemName: 'item 1', quantity: 1, isSelected: false },
    { itemName: 'item 2', quantity: 3, isSelected: false },
    { itemName: 'item 3', quantity: 2, isSelected: false },
  ]);

  const [inputValue, setInpuValue] = useState('');

  return (
    <div className="app-background">
      <div className="main-container">
        <div className="add-item-box">
          <input className="add-item-input" placeholder="Add an item..." />
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <div className="item-list">
          {items.map((item, index) => (
            <div className="item-container">
              <div className="item-name">
                {/* HINT: replace false with a boolean indicating the item has been completed or not */}
                {item.isSelected ? (
                  <>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <span className="completed">{item.itemName}</span>
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faCircle} />
                    <span>{item.itemName}</span>
                  </>
                )}
              </div>
              <div className="quantity">
                <button>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <span> {item.quantity} </span>
                <button>
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="total">Total: 6</div>
      </div>
    </div>
  );
};

export default App;
