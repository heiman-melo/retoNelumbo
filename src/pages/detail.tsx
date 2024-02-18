import { Button, Card, Steps, Typography } from "antd";
import "../css/color.css";
import "../css/detail.css";
import { useNavigate } from "react-router-dom";
import { CloseOutlined, SmileOutlined } from "@ant-design/icons";
function Detail() {
  const navigate = useNavigate();
  return (
    <>
      <div className="containerDetail">
        <Card className="cardDetail">
          <div className="headerDetail">
            <div className="containerButtonTitle">
              <Button
                type="primary"
                shape="circle"
                icon={<CloseOutlined />}
                className="buttonCloseDetail"
                onClick={() => {navigate(`/`)}}
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
              <Steps current={0} items={[{}, {}, {},{icon:<SmileOutlined/>}]} />
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Detail;
