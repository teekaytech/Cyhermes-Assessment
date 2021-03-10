import '../../stylesheets/App.scss';
import SidePanel from '../SidePanel';
import Main from '../Main';

function App() {
  return (
    <div className="App">
      <section className="App__sideNav">
        <SidePanel />
      </section>
      <section className="App__board">
        <Main />
      </section>
    </div>
  );
}

export default App;
