import { Button, Card, Col, Modal, Row, Steps, Typography, Image } from "antd";
import "../css/color.css";
import "../css/detail.css";
import { useNavigate } from "react-router-dom";
import { CloseOutlined, SmileOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import TicketWaves from "../assets/ticket-waves.svg";
function Detail() {
  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);

  const handleClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    setVisible(true);
  }, []);
  return (
    <>
      <div className="containerDetail">
        <Modal
          className="modalDetail"
          open={visible}
          footer={null}
          width={650}
          onCancel={handleClose}
          centered={true}
        >
          <Image preview={false} alt="" src={TicketWaves} />
          <div className="titleModal">
            <Typography.Title level={3}>Detalles del Folio</Typography.Title>
            <Typography.Text>
              {" "}
              Algunos detalles del Folio Consultado!
            </Typography.Text>
          </div>
          <div className="rowContainer">
            <Row gutter={[0,32]}>
              <Col span={8}>
                <Typography.Text>Folio de Servicio</Typography.Text>
                <Typography.Title level={5}>20171828188828</Typography.Title>
              </Col>
              <Col span={8}>
                <Typography.Text>Fecha De Levantamiento</Typography.Text>
                <Typography.Title level={5}>20/10/2023</Typography.Title>
              </Col>
              <Col span={8}>
                <Typography.Text>Fecha De Finalización</Typography.Text>
                <Typography.Title level={5}>20/10/2023</Typography.Title>
              </Col>
              <Col span={8}>
                <Typography.Text>IMEI</Typography.Text>
                <Typography.Title level={5}>354647089752389</Typography.Title>
              </Col>
              <Col span={8}>
                <Typography.Text>Equipo</Typography.Text>
                <Typography.Title level={5}>
                  Samsung Galaxy A12
                </Typography.Title>
              </Col>
              <Col span={8}>
                <Typography.Text>Sucursal De Levantamiento</Typography.Text>
                <Typography.Title level={5}>Centro Av. 487</Typography.Title>
              </Col>
              <Col span={24}>
                <Typography.Text>Detalles de Averías y Observaciones</Typography.Text>
                <Typography.Title level={5} style={{lineHeight:"22px",marginTop:"2px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography.Title>
              </Col>
            </Row>
          </div>
        </Modal>
        <Card className="cardDetail">
          <div className="headerDetail">
            <div className="containerButtonTitle">
              <Button
                type="primary"
                shape="circle"
                icon={<CloseOutlined />}
                className="buttonCloseDetail"
                onClick={() => {
                  navigate(`/`);
                }}
              />
              <div className="title">
                <Typography.Title level={3}>
                  Samsung Galaxy A12
                </Typography.Title>
                <Typography.Text style={{}}>
                  <em>Fecha de Levantamiento DD/MM/YYYY</em>
                </Typography.Text>
              </div>
            </div>
            <div className="stepDetailContainer">
              <Steps
                current={0}
                items={[{}, {}, {}, { icon: <SmileOutlined /> }]}
              />
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Detail;
