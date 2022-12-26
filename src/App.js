import React, { useState, useEffect } from 'react';
import './style.css';
import { useAlert } from 'react-alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
  faCircle,
  faCheckCircle,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const alert = useAlert();
  // HINT: each "item" in our list names a name, a boolean to tell if its been completed, and a quantity
  const [items, setItems] = useState([
    { itemName: 'item 1', quantity: 0, isSelected: false },
    { itemName: 'item 2', quantity: 0, isSelected: false },
    { itemName: 'item 3', quantity: 0, isSelected: false },
  ]);

  const [inputValue, setInputValue] = useState('');
  const [totalItemCount, setTotalItemCount] = useState(0);

  const handleAddButtonClick = () => {
    if (inputValue !== '') {
      const newItem = {
        itemName: inputValue,
        quantity: 0,
        isSelected: false,
      };
      const newItems = [...items, newItem];

      setItems(newItems);
      setInputValue('');
      calculateTotal();
    } else {
      return alert.show('Oh look, an alert!');
    }
  };
  const handleQuantityIncrease = (index) => {
    const newItems = [...items];
    newItems[index].quantity++;
    setItems(newItems);
    if (newItems[index].quantity < 0) {
      return (newItems[index].quantity = 0);
    }
    calculateTotal();
  };
  const handleQuantityDecrease = (index) => {
    const newItems = [...items];
    newItems[index].quantity--;
    setItems(newItems);
    console.log(newItems[0].quantity);
    if (newItems[index].quantity < 0) {
      return (newItems[index].quantity = 0);
    }
    calculateTotal();
  };

  const toggleComplete = (index) => {
    const newItems = [...items];
    newItems[index].isSelected = !newItems[index].isSelected;
    setItems(newItems);
  };

  const calculateTotal = () => {
    const totalItemCount = items.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
    setTotalItemCount(totalItemCount);
  };
  return (
    <div className="app-background">
      <div className="main-container">
        <div className="add-item-box">
          <input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            className="add-item-input"
            placeholder="Add an item..."
          />
          <FontAwesomeIcon
            icon={faPlus}
            onClick={() => handleAddButtonClick()}
          />
        </div>
        <div className="item-list">
          {items.map((item, index) => (
            <div className="item-container">
              <div className="item-name" onClick={() => toggleComplete(index)}>
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
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    onClick={() => handleQuantityDecrease(index)}
                  />
                </button>
                <span> {item.quantity} </span>
                <button>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    onClick={() => handleQuantityIncrease(index)}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="total">Total: {totalItemCount}</div>
      </div>
    </div>
  );
};

export default App;
