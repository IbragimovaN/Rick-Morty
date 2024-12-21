import { Link } from "react-router-dom";
import { internalPaths } from "../../../../constants/internalPath";
import { forwardRef, memo } from "react";
import { formatDate } from "../../../../utils/formatDate";
import { Card } from "antd";
const EpisodeCard = forwardRef(({ ...episodeObg }, ref) => {
  const { name, created, episode } = episodeObg;
  const formatedCreated = formatDate(created);
  return (
    <div ref={ref}>
      <Link to={internalPaths.episode(episodeObg.id)}>
        <Card title={name} bordered={false} style={{ width: 300 }}>
          <p>episode: {episode}</p>
          <p>created: {formatedCreated}</p>
        </Card>
      </Link>
    </div>
  );
});
export default memo(EpisodeCard);
