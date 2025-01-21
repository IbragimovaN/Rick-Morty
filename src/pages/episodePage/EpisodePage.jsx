import { useParams } from "react-router-dom";
import { useFetchOneElem } from "../../hooks/useFetchOneElem";
import { Card } from "antd";
import { OneElemPageLayout } from "../../components";

const EpisodePage = () => {
  const params = useParams();
  const { elem, error, isLoading } = useFetchOneElem("episode", params.id);

  return (
    <OneElemPageLayout error={error} isLoading={isLoading}>
      <Card hoverable style={{ maxWidth: "100%", marginTop: 40 }}>
        <div>Created: {elem.created}</div>
        <div>Name: {elem.name}</div>
        <div>Air date: {elem.air_date}</div>
        <div>Episode: {elem.episode}</div>
      </Card>
    </OneElemPageLayout>
  );
};

export default EpisodePage;
