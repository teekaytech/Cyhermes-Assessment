import '../stylesheets/subscribe.scss';

const SubscribeCard = () => (
  <section className="Subscribe">
    <article className="Start">
      <p className="Content">
        <span className="Content__init">Starts From</span>
        <span className="Content__currency">NGN</span>
        <span className="Content__amount">5,999,999,99</span>
        per annum
      </p>
      <p className="Current">
        <span className="Current__plan">Premium</span>
        100 Users
        {' '}
        <span className="Current__dot">&#9679;</span>
        {' '}
        All Modules
      </p>
    </article>
    <article className="Plan">
      <div className="Plan__mark">✔</div>
      <h6 className="Plan__header">Basic</h6>
      <p className="Plan__more">
        <span className="Plan__days">30 days trails</span>
        {' '}
        on our premium app
        features and features
      </p>

      <fieldset className="details-field">
        <legend>INCLUDES</legend>
        <ul className="Plan__plackage">
          <li className="Plan__package--items">25 Users</li>
          <li className="Plan__package--items">All modules & features</li>
          <li className="Plan__package--items">Unlimited Commitees</li>
          <li className="Plan__package--items">Unlimited roles creation</li>
        </ul>
      </fieldset>
    </article>
  </section>
);

export default SubscribeCard;
