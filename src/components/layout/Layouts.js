import React, { useState } from 'react';
import { Layout, Menu, Dropdown, Row, Col, Avatar } from 'antd';
import { Menu as MenuIcon, User, VideoCamera, Setting, Logout } from '@ant-design/icons';

const Layouts = () => {
  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;

  const [collapsed, setCollapsed] = useState(false);

  const userMenu = (
    <Menu mode="inline">
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          <Setting style={{ marginRight: 5 }} />
          Account settings
      </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          <Logout style={{ marginRight: 5 }} />
          Logout
      </a>
      </Menu.Item>
    </Menu>
  );

  const toggle = () => {
    setCollapsed(
      !collapsed,
    );
  };

  return (
    <Layout>
      <Sider
        width={256}
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "sticky",
          top: 0,
          left: 0
        }}>
        <div
          style={{
            position: 'relative',
            height: 64,
            overflow: 'hidden',
            transition: 'all .2s'
          }}>

          <MenuIcon
            style={{
              padding: `24px ${collapsed ? 32 : 24}px`,
              transition: 'all .2s'
          }}
          onClick={toggle}/>
        </div>
        <Menu
          style={{
            padding: '16px 0'
          }}
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}>
          <SubMenu
            key="sub1"
            title={
              <span>
                <User />
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <VideoCamera />
                <span>Navigation Two</span>
              </span>
            }
          >
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout >
        <Header
          style={{
            position: 'fixed',
            transition: 'width .2s',
            padding: '0',
            top: 0,
            right: 0,
            width: `calc(100% - ${collapsed ? 80 : 256}px)`,
            backgroundColor: 'white'
          }}>
          <div>
            <Row type="flex" justify="space-between">
              <Col span={4}>col-4</Col>
              <Col span={4}>
                <Dropdown overlay={userMenu}>
                  <span
                    className="ant-dropdown-link"
                    style={{
                      cursor: 'pointer',
                      height: 64,
                      display: 'inline-block'
                    }}
                  >
                    <Avatar
                      style={{
                        margin: '20px 8px 20px 0'
                      }}
                      src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" />
                    User name
                  </span>
                </Dropdown>
              </Col>
            </Row>
          </div>
        </Header>
        <Content
          style={{
            margin: 24,
            paddingTop: 64,
            background: 'red',
            minHeight: '100vh',
          }}
        >
          <p>lor</p>
          <p>lor</p>
          <p>lor</p>
          <p style={{marginBottom: '800px'}}>lor</p>
          </Content>
      </Layout>
    </Layout>
  );
}

export default Layouts;