import { Layout as LayoutAntd } from "antd";
import React from "react";

import { Link } from "./Link";
import { Login, Logout, Register } from "../../components";
import { Row, Col, Logo } from "./styles";

const { Header, Content } = LayoutAntd;

export const Layout: React.FC = ({ children }) => {
  return (
    <LayoutAntd
      style={{
        minHeight: "100vh",
      }}
    >
      <LayoutAntd className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Row>
            <Col span={12}>
              <Logo />
            </Col>
            <Col span={12}>
              <Register />
              <Link to="/favoritos">Favoritos</Link>
              <Link to="/">Home</Link>
              <Login />
              <Logout />
            </Col>
          </Row>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            marginTop: 64,
          }}
        >
          {children}
        </Content>
      </LayoutAntd>
    </LayoutAntd>
  );
};
