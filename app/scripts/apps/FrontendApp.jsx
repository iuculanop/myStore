import React from 'react';
// import { Link } from 'react-router';
import { Layout, Menu, Icon } from 'antd';
import { menuLink } from 'util/NavigationUtils.jsx';

const { Header, Sider, Content } = Layout;

// import usrImg from 'images/icon-user.png';

class FrontendApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[]} onClick={menuLink}>
            <Menu.Item key="boxes">
              <Icon type="inbox" />
              <span className="nav-text">Scatole</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span className="nav-text">nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span className="nav-text">nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            <div>{this.props.children}</div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

FrontendApp.propTypes = {
  children: React.PropTypes.element,
};

export { FrontendApp };
