import '../stylesheets/user.scss';

const UserBar = () => (
  <section className="User">
    <h6 className="User__header">Add more users</h6>
    <p className="User__amount">NGN99,999 per user</p>
    <input type="range" min="0" value="100" max="1000" className="User__range" />
  </section>
);

export default UserBar;
