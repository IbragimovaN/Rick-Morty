import { useParams } from "react-router-dom";
import { useFetchOneElem } from "../../hooks/useFetchOneElem";
import { LoadingSpinner } from "../Common/LoadingSpinner";
import { Card } from "antd";
import { OneElemPageLayout } from "../Common/OneElemPageLayout";

export const LocationPage = () => {
  const params = useParams();
  const { elem, error, isLoading } = useFetchOneElem("location", params.id);

  return (
    <OneElemPageLayout error={error} isLoading={isLoading}>
      <Card style={{ maxWidth: "100%", marginTop: 40 }}>
        <div>Id: {elem.id}</div>
        <div>Created: {elem.created}</div>
        <div>Name: {elem.name}</div>
        <div>Dimension: {elem.dimension}</div>
        <div>Type: {elem.type}</div>
      </Card>
    </OneElemPageLayout>
  );
};
