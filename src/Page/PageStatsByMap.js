import React, { Component } from "react"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
} from "react-simple-maps"
import { scaleLinear } from "d3-scale"
import request from "axios"
import Axios from "axios"
import { Radio, Icon, Col, Row, Typography } from 'antd'
import { API_BASE_URL, ACCESS_TOKEN } from '../constants';

const { Text } = Typography;

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
}

const cityScale = scaleLinear()
  .domain([0, 6]) //[0,37843000]
  .range([1, 25])

class BasicMap extends Component {
  constructor() {
    super()
    this.state = {
      alleles: [],
      chromosome: 'Autosom',
      locus: 'Amelogenin',
      autosom_locus: [],
      y_locus: [],
      x_locus: [],
      colorFlag: {},
    }
    this.fetchAlleles = this.fetchAlleles.bind(this)
  }

  componentDidMount() {
    this.fetchAlleles(this.state.locus)
    Axios.get(API_BASE_URL + "/resources/getlocuslist").then(Response => {
      this.setState({
        autosom_locus: Response.data["autosomLocus"],
        y_locus: Response.data["yLocus"],
        x_locus: Response.data["xLocus"]
      })
    })
  }

  fetchAlleles(locus) {
    const auth = { 'headers': { 'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN) } }
    request
      .get(API_BASE_URL + "/resources/statisticmap/" + locus, auth)
      .then(res => {
        this.setState({
          alleles: res.data,
        })
        let dict = {}
        res.data.map((allele) => {
          dict[allele.allele] = this.rgb2hex(allele.color)
        })
        this.setState({
          colorFlag: dict
        })
      })
  }

  renderLocusList(props) {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    let component = null;
    switch (this.state.chromosome) {
      case 'Autosom':
        component = this.state.autosom_locus.map(locus =>
          <Row type="flex" justify="start" align="top">
            <Radio style={radioStyle} value={locus}>{locus}</Radio>
          </Row>
        )
        break;
      case 'Y_STRs':
        component = this.state.y_locus.map(locus =>
          <Row type="flex" justify="start" align="top">
            <Radio style={radioStyle} value={locus}>{locus}</Radio>
          </Row>
        )
        break;
      case 'X_STRs':
        component = this.state.x_locus.map(locus =>
          <Row type="flex" justify="start" align="top">
            <Radio style={radioStyle} value={locus}>{locus}</Radio>
          </Row>
        )
        break;
      default:
        component = null;
    }
    return (
      <Radio.Group onChange={(e) => { this.setState({ locus: e.target.value }); this.fetchAlleles(e.target.value) }} value={this.state.locus}>
        {component}
      </Radio.Group>
    );
  }

  rgb2hex(rgb) {
    rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return (rgb && rgb.length === 4) ? "#" +
      ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
      ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
      ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
  }

  render() {
    const chromosome = this.state.chromosome;
    const locusList = this.renderLocusList();
    console.log(this.state)
    return (
      <div style={wrapperStyles}>
        <Row>
          <Col span={6} pull={0}>
            <Radio.Group value={chromosome} onChange={(e) => this.setState({ chromosome: e.target.value })}>
              <Radio.Button value="Autosom">Autosom</Radio.Button>
              <Radio.Button value="Y_STRs">Y_STRs</Radio.Button>
              <Radio.Button value="X_STRs">X_STRs</Radio.Button>
            </Radio.Group>
            <br /><br />
            {locusList}
          </Col>
          <Col span={14} pull={-4}>
            <ComposableMap
              projectionConfig={{ scale: 3400 }}
              width={700}
              height={900}
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <ZoomableGroup center={[100, 12.8]}>
                <Geographies geography="/gadm36_THA_1.json">
                  {(geographies, projection) =>
                    geographies.map((geography, i) =>
                      geography.id !== "ATA" && (
                        <Geography
                          key={i}
                          geography={geography}
                          projection={projection}
                          style={{
                            default: {
                              fill: "#ECEFF1",
                              stroke: "#607D8B",
                              strokeWidth: 0.75,
                              outline: "none",
                            },
                            hover: {
                              fill: "#ECEFF1",
                              stroke: "#607D8B",
                              strokeWidth: 0.75,
                              outline: "none",
                            },
                            pressed: {
                              fill: "#ECEFF1",
                              stroke: "#607D8B",
                              strokeWidth: 0.75,
                              outline: "none",
                            },
                          }}
                        />
                      ))}
                </Geographies>
                <Markers>
                  {
                    this.state.alleles.map((allele, i) => (
                      <Marker key={i} marker={{ coordinates: [allele.x, allele.y] }}>
                        <circle
                          cx={0}
                          cy={0}
                          r={cityScale(allele.count)}
                          fill={allele.color}
                          stroke="#607D8B"
                          strokeWidth="2"
                        />
                      </Marker>
                    ))
                  }
                </Markers>
              </ZoomableGroup>
            </ComposableMap>
          </Col>
          <Col >
            <div>
              <br />
              <br />
              <br />
              {
                Object.keys(this.state.colorFlag).map((key, index) => (
                  <div style={{textAlign:"left"}}><Text><Icon type="cloud" theme="twoTone" twoToneColor={this.state.colorFlag[key]} />&nbsp;&nbsp;{key}</Text></div>
                ))
              }
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default BasicMap