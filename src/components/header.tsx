// import { Link } from "react-router-dom";

import "../css/header.css";
import {Layout, Space,Image,Avatar} from "antd"
import { DesktopOutlined, ShopOutlined, UserOutlined } from "@ant-design/icons"
import macropayAzul from "../assets/macropay-azul.png"
function Header() {
  return (
    <Layout.Header className="header">
      <Image alt="" src={macropayAzul} height={35} />
      <Space align="center" size={"large"} className="icon">
        <ShopOutlined className="icon" rev={undefined} />
        <DesktopOutlined className="icon" rev={undefined} />
          <Avatar icon={<UserOutlined style={{ cursor: "pointer" }} />}/>
      </Space>
    </Layout.Header>
  );
}

export default Header;
