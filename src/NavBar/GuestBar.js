import React, { Component } from 'react'
import { Menu, Icon, Button } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class GuestNavbar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const colorTheme = '';
        return (
            <Menu
                selectedKeys={[this.props.current]}
                mode="horizontal"
                theme="light"
                style={{ lineHeight: '64px', backgroundColor:colorTheme }}
            >
                <Menu.Item key="home">
                    <a href="/" ><Icon type="home" />Home</a>
                </Menu.Item>
                <Menu.Item key="search">
                    <a href="/search" ><Icon type="search" />Search</a>
                </Menu.Item>
                <SubMenu title={<span><Icon type="radar-chart" />Statistics</span>}>
                    <MenuItemGroup title="Group By Locus" style={{backgroundColor:colorTheme}}>
                        <Menu.Item key="setting:1"><a href="/stats/graph" ><Icon type="bar-chart" />Graph</a></Menu.Item>
                        <Menu.Item key="setting:2"><a href="/stats/map" ><Icon type="google" />Map</a></Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                <SubMenu title={<span><Icon type="line-chart" />Analysis</span>}>
                    <MenuItemGroup title="Analysis" style={{backgroundColor:colorTheme}}>
                        <Menu.Item key="graph"><a href="/analysis/kinship" ><Icon type="team" />Kinchip Analysis</a></Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                <Menu.Item key="search" style={{ float: 'right' }}>
                    <Button type="dashed"><a href="/login"><Icon type="login" />Login</a></Button>
                </Menu.Item>
            </Menu>
        )
    }
}
