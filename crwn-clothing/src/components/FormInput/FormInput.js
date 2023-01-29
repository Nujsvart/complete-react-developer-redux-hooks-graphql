import "./formInput.styles.scss";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      {console.log(otherProps.value)}
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
