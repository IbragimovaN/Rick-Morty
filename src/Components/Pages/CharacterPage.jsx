import { useParams } from "react-router-dom";
import { useFetchOneElem } from "../../hooks/useFetchOneElem";
import { Card, ConfigProvider, Row, Col } from "antd";
import { OneElemPageLayout } from "../Common/OneElemPageLayout";

export const CharacterPage = () => {
  const params = useParams();
  const { elem, error, isLoading } = useFetchOneElem("character", params.id);

  return (
    <OneElemPageLayout error={error} isLoading={isLoading}>
      <Card style={{ maxWidth: "100%", marginTop: 40 }}>
        <Row gutter={20}>
          <Col span={8}>
            <img
              src={elem.image}
              alt={elem.name}
              style={{ maxWidth: "100%" }}
            />
          </Col>
          <Col span={16}>
            <h2>Name: {elem.name}</h2>
            <div>Id: {elem.id}</div>
            <div>Created: {elem.created}</div>
            <div>Status: {elem.status}</div>
            <div>Type: {elem.type}</div>
            <div>Gender: {elem.gender}</div>
            <div>Species: {elem.species}</div>
          </Col>
        </Row>
      </Card>
    </OneElemPageLayout>
  );
};
