const Input = ({
  label,
  placeholder,
  className,
  labelClassName,
  value,
  setValue,
}) => {
  return (
    <div className={`Label flex flex-col space-y-2 w-full   ${className}`}>
      <label htmlFor={label} className={`font-semibold mt-4 ${labelClassName}`}>
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="p-2 border  rounded border-solid border-gray-400 placeholder-gray-500 "
        id={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};
export default Input;
