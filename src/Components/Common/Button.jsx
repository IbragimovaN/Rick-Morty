export const Button = ({ type, onClick, text, width }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="text-white bg-[rgb(66,63,235)] px-4 py-2 rounded transition-transform transform hover:scale-105"
      style={{ width: width ? width : "100%" }}
    >
      {text}
    </button>
  );
};
