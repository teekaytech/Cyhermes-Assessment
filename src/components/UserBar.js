/* eslint-disable no-unused-vars */
import { useState } from 'react';
import '../stylesheets/user.scss';

const UserBar = () => {
  const [range, setrange] = useState(100);
  return (
    <section className="User">
      <h6 className="User__header">Add more users</h6>
      <p className="User__amount">NGN99,999 per user</p>
      <input type="range" min="0" value={range} max="1000" className="User__range" onChange={() => setrange()} />
    </section>
  );
};

export default UserBar;
