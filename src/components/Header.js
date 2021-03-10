/* eslint-disable no-unused-vars */
import { useState } from 'react';
import '../stylesheets/header.scss';

const Header = () => {
  const [name, setname] = useState('Terry');
  const [amount, setamount] = useState(1999999);
  return (
    <header className="Header">
      <p className="Header__greeting">
        Hey,
        {' '}
        {name}
      </p>
      <div className="Header__info">
        <div className="Item">
          <h3 className="Item__header">
            Start your
            {' '}
            <span>30 days</span>
            {' '}
            Trial
          </h3>
          <p className="Item__details">Select your preferred package below</p>
        </div>
        <div className="Item">
          <span className="Item__currency">NGN</span>
          <h2 className="Item__amount">{amount.toLocaleString()}</h2>
          <p className="Item__remark">
            Total
            <span className="Item__remark--details">(Excludes vat)</span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
