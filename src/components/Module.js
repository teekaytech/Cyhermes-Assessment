import PropTypes from 'prop-types';
import '../stylesheets/module.scss';

const Module = ({ item }) => {
  const { title, sub, img } = item;
  return (
    <article className="Module">
      <div className="Module__info">i</div>
      <div className="Module__item1">
        <img src={img} alt="logo" className="image" />
      </div>
      <div className="Module__item2">
        <p className="details">
          {title}
          <br />
          {sub}
        </p>
      </div>
    </article>
  );
};

Module.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    sub: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
};

export default Module;
