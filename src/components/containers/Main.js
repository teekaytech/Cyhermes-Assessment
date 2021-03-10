import Header from '../Header';
import Module from '../Module';
import SubscribeCard from '../SubscribeCard';
import UserBar from '../UserBar';
import '../../stylesheets/main.scss';
import Items from '../../models';

const Main = () => {
  const Modules = Items.map(item => (
    <div className="Modules__item" key={item.id}>
      <Module item={item} />
    </div>
  ));

  return (
    <>
      <Header />
      <main>
        <SubscribeCard />
        <UserBar />
        <fieldset className="Modules">
          <legend>ALL MODULES</legend>
          { Modules }
        </fieldset>
        <div className="FooterNav">
          <a href="/" className="FooterNav__back">
            Go Back
          </a>
          <button type="submit" className="FooterNav__forward">
            Continue
          </button>
        </div>
      </main>
    </>
  );
};

export default Main;
