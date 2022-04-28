import classes from "./Input.module.css";

const Input = ({ 
  type, 
  placeHolder, 
  onChange, 
  value, 
  className }) => {

  return (

    <div>

      <input
        className={`${classes.search} ${className}` }
        type={type}
        placeholder={placeHolder}
        onChange={onChange}
        value={value}
      />
      
    </div>

  );

};

export default Input;
