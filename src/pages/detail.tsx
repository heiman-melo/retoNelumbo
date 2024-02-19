import {
  Button,
  Card,
  Col,
  Modal,
  Row,
  Steps,
  Typography,
  Image,
  Form,
  Input,
  Select,
} from "antd";
import "../css/color.css";
import "../css/detail.css";
import { useNavigate } from "react-router-dom";
import {
  CloseOutlined,
  SmileOutlined,
  ApiOutlined,
  NodeIndexOutlined,
  PhoneOutlined,
  OneToOneOutlined,
} from "@ant-design/icons";
import { useState, useEffect } from "react";
import TicketWaves from "../assets/ticket-waves.svg";

import phoneRight from "../assets/phone-right.png";
import phoneBack from "../assets/phone-back.png";
import phoneFront from "../assets/phone-front.png";
import phoneTop from "../assets/phone-top.png";
import phoneBottom from "../assets/phone-bottom.png";
import phoneLeft from "../assets/phone-left.png";

// import Item from "antd/es/descriptions/Item";
function Detail() {
  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);

  const handleClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    setVisible(true);
  }, []);

  const options = [
    { value: "demo", label: "Demo" },
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
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
            <Row gutter={[0, 32]}>
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
                <Typography.Text>
                  Detalles de Averías y Observaciones
                </Typography.Text>
                <Typography.Title
                  level={5}
                  style={{ lineHeight: "22px", marginTop: "2px" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography.Title>
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
          <Row>
            <Col className="column" span={6}>
              primera
            </Col>
            <Col span={18}>
              <Form name="form" layout="vertical">
                <Row>
                  <Col className="column" span={12}>
                    <Form.Item label="SELECCIÓN DE FALLA">
                      <Select mode="multiple">
                        {options.map((option) => (
                          <Select.Option
                            key={option.value}
                            value={option.value}
                          >
                            {option.label}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                    <Form.Item
                      name="textarea"
                      label="DESCRIPCIÓN DE LAS FALLAS DETECTADAS"
                    >
                      <Input.TextArea autoSize={{ minRows: 2, maxRows: 5 }} />
                    </Form.Item>
                    <Form.Item name="textarea" label="CONDICIONES DE ENTREGA">
                      <Input.TextArea autoSize={{ minRows: 2, maxRows: 5 }} />
                    </Form.Item>
                    <Typography.Text>
                      SELECCIONE LOS ACCESORIOS INCLUIDOS
                    </Typography.Text>
                    <Row style={{ paddingTop: "12px" }} gutter={[16, 16]}>
                      <Col span={12}>
                        <Button
                          className="button"
                          type="dashed"
                          icon={<PhoneOutlined />}
                        >
                          Audífonos
                        </Button>
                      </Col>
                      <Col span={12}>
                        <Button
                          className="button"
                          type="dashed"
                          icon={<ApiOutlined />}
                        >
                          Cargador
                        </Button>
                      </Col>
                      <Col span={12}>
                        <Button
                          className="button"
                          type="dashed"
                          icon={<OneToOneOutlined />}
                        >
                          Caja
                        </Button>
                      </Col>
                      <Col span={12}>
                        <Button
                          className="button"
                          type="dashed"
                          icon={<NodeIndexOutlined />}
                        >
                          Cable USB
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="column columnImage" span={12}>
                    <Row gutter={[16, 16]}>
                      <Col span={24}>
                        <Typography.Text>
                          SELECCIÓN DE PARTES AFECTADAS
                        </Typography.Text>
                      </Col>
                      <Col span={2}></Col>
                      <Col span={22}>
                        <Image
                          preview={false}
                          alt=""
                          src={phoneTop}
                          style={{ width: "140px" }}
                        ></Image>
                      </Col>
                      <Col span={2}>
                        <Image
                          preview={false}
                          alt=""
                          src={phoneRight}
                          style={{ width: "13px" }}
                        >
                        </Image>
                      </Col>
                      <Col span={9}>
                        <Image
                          preview={false}
                          alt=""
                          src={phoneBack}
                          style={{ width: "140px" }}
                        ></Image>
                      </Col>
                      <Col span={2}>
                        <Image
                          preview={false}
                          alt=""
                          src={phoneLeft}
                          style={{ width: "13px" }}
                        ></Image>
                      </Col>
                      <Col span={11}>
                        <Image
                          preview={false}
                          alt=""
                          src={phoneFront}
                          style={{ width: "140px" }}
                        ></Image>
                      </Col>
                      <Col span={2}></Col>
                      <Col span={12}>
                        <Image
                          preview={false}
                          alt=""
                          src={phoneBottom}
                          style={{ width: "140px" }}
                        ></Image>
                      </Col>
                      <Col span={10} style={{ paddingLeft: "14px" }}>
                        <Button
                          className="newFolioButton"
                          type="primary"
                          onClick={() => {
                            Modal.confirm({
                              centered: true,
                              title: "Confirm",
                              content:
                                "¿Está seguro que desea confirmar el proceso de generación de folio? los datos ingresados serán guardados.",
                              footer: () => (
                                <>
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "space-between",
                                    }}
                                  >
                                    <Button
                                      onClick={() => {
                                        Modal.destroyAll();
                                      }}
                                      style={{
                                        marginLeft: "30px",
                                        color: "#0047BA",
                                      }}
                                      type="dashed"
                                    >
                                      Salir
                                    </Button>
                                    <Button
                                      onClick={() => {
                                        Modal.destroyAll();
                                      }}
                                      type="primary"
                                    >
                                      Confirmar Selección
                                    </Button>
                                  </div>
                                </>
                              ),
                            });
                          }}
                        >
                          Continuar
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
}

export default Detail;
