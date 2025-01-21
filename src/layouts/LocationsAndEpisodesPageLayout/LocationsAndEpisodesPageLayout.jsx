import { Col, Row } from "antd";

export const LocationsAndEpisodesPageLayout = ({ children, imgSrc }) => {
  return (
    <Row>
      <Col span={window.innerWidth < 768 ? 24 : 18} style={{ zIndex: 1 }}>
        {children}
      </Col>
      <Col span={6}>
        {" "}
        <div
          style={{
            position: "fixed",
            right: "50px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 0,
          }}
        >
          {" "}
          <img src={imgSrc} style={{ width: "350px", height: "auto" }}></img>
        </div>
      </Col>
    </Row>
  );
};
