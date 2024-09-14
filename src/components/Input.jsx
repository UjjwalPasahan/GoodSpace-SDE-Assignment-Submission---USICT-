
import PropTypes from 'prop-types';
import '../styles/Input.scss'; 

const Input = ({ name, type, value, placeholder, handleChange, width }) => {
  return (
    <input
      className="input-component"
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      style={{ width }}
    />
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  width: PropTypes.string
};

Input.defaultProps = {
  type: 'text',
  width: '100%' 
};

export default Input;
