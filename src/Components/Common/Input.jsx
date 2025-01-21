export const Input = ({ type, name, placeholder, label }) => {
  return (
    <label className="block mb-2">
      {label}

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="border border-gray-300 rounded p-2 w-full"
      />
    </label>
  );
};
