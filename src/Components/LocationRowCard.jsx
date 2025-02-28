import { Link } from "react-router-dom";
import { internalPaths } from "../internalPath";
import { forwardRef, memo } from "react";
export const LocationRowCard = forwardRef(({ ...location }, ref) => {
  const { name, created } = location;
  return (
    <div
      ref={ref}
      className="max-w-lg h-50  rounded  shadow-lg m-4 bg-white hover:shadow-xl transition-shadow duration-300"
    >
      <Link to={internalPaths.location(location.id)}>
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-800">{name}</h3>
          <div className="text-gray-600 mt-1">{created}</div>
        </div>
      </Link>
    </div>
  );
});
export default memo(LocationRowCard);
