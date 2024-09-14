
import PropTypes from 'prop-types';
import '../styles/Button.scss'; 

const Button = ({ label, onClick, type }) => {
  return (
    <button className="button" type={type} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string
};

Button.defaultProps = {
  type: 'button', 
  onClick: () => {}
};

export default Button;
