export const Input = ({ type, name, placeholder, label, width, onChange }) => {
  return (
    <label className="block mb-2">
      {label}

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="border border-gray-300 rounded p-2"
        style={{ width: width ? width : "100%" }}
        onChange={(e) => onChange(e)}
      />
    </label>
  );
};
