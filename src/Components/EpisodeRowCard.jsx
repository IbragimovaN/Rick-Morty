import { Link } from "react-router-dom";
import { internalPaths } from "../internalPath";
export const EpisodeRowCard = ({ episodeObg }) => {
  const { name, created, episode } = episodeObg;
  return (
    <div className="max-w-lg h-50 rounded  shadow-lg m-4 bg-white hover:shadow-xl transition-shadow duration-300">
      <Link to={internalPaths.episode(episodeObg.id)}>
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-800">{name}</h3>
          <div className="text-gray-600 mt-1">{episode}</div>
          <div className="text-gray-600 mt-1">{created}</div>
        </div>
      </Link>
    </div>
  );
};
