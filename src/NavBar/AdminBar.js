import React, { Component } from 'react'
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class AdminNavbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoginActive: false
        }
    }

    handleMenuClick = ({ key }) => {
        console.log(key)
        if(key === "logout") {
          this.props.onLogout();
        }
      }
  

    render() {
        return (
            <Menu
                onClick={this.handleMenuClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="home">
                    <a href="/" ><Icon type="home" />Home</a>
                </Menu.Item>
                <Menu.Item>
                    <a href="/search" ><Icon type="search" />Search</a>
                </Menu.Item>
                <SubMenu title={<span><Icon type="radar-chart" />Statistics</span>}>
                    <MenuItemGroup title="Group By Locus">
                        <Menu.Item key="graph"><a href="/stats/graph" ><Icon type="bar-chart" />Graph</a></Menu.Item>
                        <Menu.Item key="map"><a href="/stats/map" ><Icon type="google" />Map</a></Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                <SubMenu style={{ float: 'right' }} title={<span><Icon type="setting" />Lab User Menu</span>}>
                    <MenuItemGroup title="Function">
                        <Menu.Item key="add"><a href="/adddata" ><Icon type="file-add" />Add data</a></Menu.Item>
                        <Menu.Item key="isnp"><a href="/isnpstat" ><Icon type="box-plot" />iSNPs</a></Menu.Item>
                        <Menu.Item key="alignment"><a href="/seqalign" ><Icon type="box-plot" />Seq Alignment</a></Menu.Item>
                        <Menu.Item key="logout"><Icon type="logout" />Logout</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
            </Menu>
        )
    }
}
