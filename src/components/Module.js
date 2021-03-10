import PropTypes from 'prop-types';
import '../stylesheets/module.scss';

const Module = ({ item }) => {
  const { title, sub, img } = item;
  return (
    <article className="Module">
      <img src={img} alt="logo" className="Module_image" />
      <p className="Module_details">
        {title}
        <br />
        {sub}
      </p>
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
