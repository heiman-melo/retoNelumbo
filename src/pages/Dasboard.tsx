import "../css/color.css"
import "../css/dasboard.css";
import {
  Card,
  Col,
  Row,
  Image,
  Tabs,
  TabsProps,
  Typography,
  Form,
  Input,
  Button,
  Modal,
} from "antd";
import cocoEscudo from "../assets/coco-escudo.png";
import macropayTransparente from "../assets/macropay-transparente.png";
import { useNavigate } from "react-router-dom";

function Dasboard() {

  const navigate = useNavigate();
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Nuevo Folio",
    },
    {
      key: "2",
      label: "Consultar Folio",
    },
  ];
  return (
    <>
      <div className="container">
        <Card className="card">
          <Row>
            <Col span={12}>
              <div className="leftSide">
                <Image
                  preview={false}
                  alt=""
                  src={macropayTransparente}
                  height={150}
                  style={{ width: "100%", height: "auto" }}
                />
                <Image
                  preview={false}
                  alt=""
                  src={cocoEscudo}
                  width={350}
                  style={{ padding: "2rem" }}
                />
              </div>
            </Col>
            <Col span={12}>
              <div className="rightSide">
                <Tabs items={items} centered className="tabs" />
                <section className="sectionRight">
                  <Typography.Title level={3} className="newFolioTitle">
                    Gestión de Nuevo Folio
                  </Typography.Title>
                  <Form
                    className="formImei"
                    name="formulario"
                    layout="vertical"
                  >
                    <Form.Item label="Para gestionar un nuevo folio por favor ingrese el numero IMEI del equipo">
                      <Input size="large" placeholder="IMEI del equipo" />
                    </Form.Item>
                  </Form>
                  <Button
                    className="newFolioButton"
                    type="primary"
                    onClick={() => {
                      Modal.confirm({
                        centered: true,
                        title: "Formato de IMEI no Vàlido",
                        content: "El IMEI no cumple con el formato requerido",
                        okText: "Aceptar",
                        cancelText:null,
                        onOk: () => {
                            navigate(`/detail`)
                        },
                        width: 500,

                      });
                    }}
                  >
                    Continuar
                  </Button>
                </section>
              </div>
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
}

export default Dasboard;
