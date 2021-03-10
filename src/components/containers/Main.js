import Header from '../Header';
import Module from '../Module';
import SubscribeCard from '../SubscribeCard';
import UserBar from '../UserBar';
import '../../stylesheets/main.scss';

const Main = () => (
  <>
    <Header />
    <main>
      <SubscribeCard />
      <UserBar />
      <fieldset className="Modules">
        <legend>
          ALL MODULES
        </legend>
        <Module />
      </fieldset>
      <div>
        <a href="#back">Go Back</a>
        <button type="submit">Continue</button>
      </div>
    </main>
  </>
);

export default Main;
