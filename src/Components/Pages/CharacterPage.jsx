import { useParams } from "react-router-dom";
import { useFetchOneElem } from "../../hooks/useFetchOneElem";
import { Card, Row, Col, Image } from "antd";
import { OneElemPageLayout } from "../Common/OneElemPageLayout";

const CharacterPage = () => {
  const params = useParams();
  const { elem, error, isLoading } = useFetchOneElem("character", params.id);

  return (
    <OneElemPageLayout error={error} isLoading={isLoading}>
      <Card style={{ maxWidth: "100%", marginTop: 40 }}>
        <Row gutter={20}>
          <Col span={8}>
            <Image src={elem.image} alt={elem.name} />
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
export default CharacterPage;
