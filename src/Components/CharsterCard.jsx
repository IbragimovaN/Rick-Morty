import { Link } from "react-router-dom";
import { internalPaths } from "../internalPath";
import { forwardRef, memo } from "react";

const CharsterCard = forwardRef(({ ...character }, ref) => {
  const { name, species, image, created } = character;

  return (
    <div
      className="max-w-xs rounded  shadow-lg m-4 bg-white hover:shadow-xl transition-shadow duration-300 "
      ref={ref}
    >
      <Link to={internalPaths.character(character.id)}>
        <img className="w-full h-100 object-cover" src={image} alt={name} />

        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-800">{name}</h3>
          <div className="text-gray-600 mt-1">{created}</div>
          <div className="text-gray-600 mt-1">{species}</div>
        </div>
      </Link>
    </div>
  );
});
export default memo(CharsterCard);
