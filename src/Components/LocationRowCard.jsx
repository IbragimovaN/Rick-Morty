import { Link } from "react-router-dom";
import { internalPaths } from "../internalPath";
import { forwardRef, memo } from "react";
import { Card } from "antd";
import { formatDate } from "../utils/formatDate";
export const LocationRowCard = forwardRef(({ ...location }, ref) => {
  const { name, created } = location;
  const formatedCreated = formatDate(created);
  return (
    <div ref={ref}>
      <Link to={internalPaths.location(location.id)}>
        <Card title={name} bordered={false} style={{ width: 300 }}>
          <p>created: {formatedCreated}</p>
        </Card>
      </Link>
    </div>
  );
});
export default memo(LocationRowCard);
