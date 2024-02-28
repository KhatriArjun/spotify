const Password = ({ label, Placeholder, value, setValue }) => {
  return (
    <div className="Label flex flex-col space-y-2 w-full">
      <label htmlFor={label} className="font-semibold mt-4">
        {label}
      </label>
      <input
        type="password"
        placeholder={Placeholder}
        className="p-2 border  rounded border-solid border-gray-400 placeholder-gray-500 "
        id={label}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};
export default Password;
