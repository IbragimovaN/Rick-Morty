import { Link } from "react-router-dom";
import { internalPaths } from "../internalPath";
import { forwardRef, memo } from "react";
import { formatDate } from "../utils/formatDate";
import { Card } from "antd";
const EpisodeRowCard = forwardRef(({ ...episodeObg }, ref) => {
  const { name, created, episode } = episodeObg;
  const formatedCreated = formatDate(created);
  return (
    <div
      className="max-w-lg h-50 rounded  shadow-lg m-4 bg-white hover:shadow-xl transition-shadow duration-300"
      ref={ref}
    >
      <Link to={internalPaths.episode(episodeObg.id)}>
        <Card title={name} bordered={false} style={{ width: 300 }}>
          <p>episode: {episode}</p>
          <p>created: {formatedCreated}</p>
        </Card>
      </Link>
    </div>
  );
});
export default memo(EpisodeRowCard);
