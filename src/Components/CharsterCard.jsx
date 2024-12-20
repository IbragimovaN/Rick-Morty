import { Link } from "react-router-dom";
import { internalPaths } from "../internalPath";
import { forwardRef, memo } from "react";
import { Card } from "antd";
import { formatDate } from "../utils/formatDate";

const { Meta } = Card;

const CharsterCard = forwardRef(({ ...character }, ref) => {
  const { name, species, image, created } = character;
  const formatedCreated = formatDate(created);

  return (
    <div ref={ref}>
      <Link to={internalPaths.character(character.id)}>
        <Card
          hoverable
          style={{ width: 300 }}
          cover={<img src={image} alt={name} />}
        >
          <Meta title={name} description={species} />
          <div>{formatedCreated}</div>
        </Card>
      </Link>
    </div>
  );
});
export default memo(CharsterCard);
