import React, { Component } from 'react';
import {
  Form, Row, Col, Input, Button, Icon, Radio, Statistic
} from 'antd';
import Axios from 'axios';
import { API_BASE_URL } from '../constants';
import { Typography } from 'antd';

const { Text } = Typography;

class PageSearchByManual extends React.Component {
  state = {
    expand: false,
    chromosome: "Autosome",
    currentKit: "AmpFLSTR_Identifiler_Plus",
    autosomKit: [],
    yKit: [],
    xKit: [],
    currentLocusList: [],
    totalMatchSample: 0,
    listMatchSample: [],
    totalSample: 0,
    isAuthenticated: this.props.isAuthenticated,
    isClicked: false
  };

  componentWillMount() {
    Axios.get(API_BASE_URL + "/numberofperson").then((Response) => {
      console.log(Response.data)
      this.setState({
        totalSample: Response.data
      })
    })
    Axios.get(API_BASE_URL + "/getallautosomalkit").then((Response) => {
      this.setState({
        autosomKit: Response.data
      })
    })
    Axios.get(API_BASE_URL + "/getallykit").then((Response) => {
      this.setState({
        yKit: Response.data
      })
    })
    Axios.get(API_BASE_URL + "/getallxkit").then((Response) => {
      this.setState({
        xKit: Response.data
      })
    })
    this.getFieldsAPI();
  }

  getFieldsAPI() {
    let currentChromosome = "";
    switch (this.state.chromosome) {
      case "Autosome":
        currentChromosome = "/getlocusautosomalkit/";
        break;
      case "Y_STRs":
        currentChromosome = "/getlocusykit/";
        break;
      case "X_STRs":
        currentChromosome = "/getlocusxkit/";
        break;
      default:
        currentChromosome = "";
    }
    let result = [];
    Axios.get(API_BASE_URL + currentChromosome + this.state.currentKit).then((Response) => {
      Response.data.map((locus) => result.push(locus));
      this.setState({
        currentLocusList: result
      })
    })
  }

  // To generate mock Form.Item
  getFields() {
    const { getFieldDecorator } = this.props.form;
    const children = [];
    const locusList = this.state.currentLocusList;
    const count = this.state.expand ? 100 : 6;
    for (let i = 0; i < locusList.length; i++) {
      children.push(
        <Col span={2} key={locusList[i]}>
          <Form.Item label={`${locusList[i]}`}>
            {getFieldDecorator(`${locusList[i]}`, {
              rules: [{
                required: false,
                message: 'Input something!',
              }],
            })(
              <Input placeholder={"M,N"} />
            )}
          </Form.Item>
        </Col>
      );
    }
    return children;
  }

  handleSearch = (e) => {
    e.preventDefault();
    this.setState({
      isClicked: true
    })
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
      let data = [];
      console.log(Object.values(values))
      var locus = Object.keys(values)
      var text = Object.values(values)
      for (var i = 0; i < locus.length; i++) {
        var multi = text[i].split(',')
        multi.map(allele =>
          data.push({
            locus: `${locus[i]}`,
            allele: `${allele}`
          })
        )
      }
      console.log('data:', data);
      Axios.post(API_BASE_URL + '/findpersonbylocus', data).then((Response) => {
        console.log(Response.data)
        this.setState({
          totalMatchSample: Response.data.length,
          listMatchSample: Response.data
        })
      });
    });
  }

  handleReset = () => {
    this.props.form.resetFields();
  }

  toggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  }

  renderKitList = () => {
    let component = null;
    switch (this.state.chromosome) {
      case "Autosome":
        component = this.state.autosomKit.map((kit) =>
          <Radio.Button value={kit}>{kit}</Radio.Button>
        )
        break;
      case "Y_STRs":
        component = this.state.yKit.map((kit) =>
          <Radio.Button value={kit}>{kit}</Radio.Button>
        )
        break;
      case "X_STRs":
        component = this.state.xKit.map((kit) =>
          <Radio.Button value={kit}>{kit}</Radio.Button>
        )
        break;
      default:
        component = null;
    }
    return (
      <Radio.Group value={this.state.currentKit} onChange={(e) => this.setState({ currentKit: e.target.value }, () => this.getFieldsAPI())}>
        {component}
      </Radio.Group>
    );
  }

  render() {
    const isAuthenticated = this.state.isAuthenticated
    const isClicked = this.state.isClicked
    const chromosome = this.state.chromosome;
    const currentKit = this.state.currentKit;
    const renderKitList = this.renderKitList();
    const getFields = this.getFields();
    // console.log("Hello");
    return (
      <div>
        <Row>
          <p>Current chromosome is : <strong>{chromosome}</strong></p>
          <Radio.Group value={chromosome} onChange={(e) => this.setState({ chromosome: e.target.value })}>
            <Radio.Button value="Autosome">Autosome</Radio.Button>
            <Radio.Button value="Y_STRs">Y_STRs</Radio.Button>
            <Radio.Button value="X_STRs">X_STRs</Radio.Button>
          </Radio.Group>
          <br />
          <br />
          <p>Current kit is : <strong>{currentKit}</strong></p>
          {renderKitList}
        </Row>
        <br />
        <br />
        <Form
          className="ant-advanced-search-form"
          onSubmit={this.handleSearch}
        >
          <Row gutter={24}>{getFields}</Row>
          <Row>
            <Col span={24} style={{ textAlign: 'left' }}>
              <br />
              <Button type="primary" htmlType="submit">Search</Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>Clear</Button>
            </Col>
          </Row>
        </Form>
        <br /><br />
        <div style={{ backgroundColor: "lightblue" }}>
          <Statistic title="Matched Sample" value={this.state.totalMatchSample} suffix={"/ " + this.state.totalSample} />
        </div>
        {isAuthenticated && isClicked ? <div>
          {this.state.listMatchSample.map((data) => {
            return (
              <div>
                <Text type="warning">Sample Year: {data[0]} Sample ID:{data[1]}</Text>
              </div>
            )
          })}
        </div> : null}
      </div >
    );
  }
}

export default Form.create()(PageSearchByManual);