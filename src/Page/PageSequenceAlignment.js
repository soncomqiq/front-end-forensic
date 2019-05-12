import React, { Component } from 'react'
import { Input, Select, Button } from 'antd'
import { API_BASE_URL, ACCESS_TOKEN } from '../constants'
import axios from 'axios'
import AlignmentEntry from '../Container/AlignmentEntry'

const InputGroup = Input.Group
const Option = Select.Option

class PageAdminSequence extends Component {
  constructor(props) {
    super(props)

    this.state = {
      locuslist: [],
      selectedLocus: '',
      alleleInfo: [],
      selectedAllele: '',
      result: []
    }
  }

  componentDidMount() {
    const auth = { 'headers': { 'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN) } }
    axios.get(`${API_BASE_URL}/resources/locuslist`, auth).then(
      function (response) {
        // console.log(response.data)
        this.setState({ locuslist: response.data })
      }.bind(this)
    )

    axios.get(`${API_BASE_URL}/resources/alleleinfo`, auth).then(
      function (response) {
        // console.log(response.data)
        this.setState({ alleleInfo: response.data })
      }.bind(this)
    )
  }

  sequenceAlign() {
    const auth = { 'headers': { 'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN) } }
    var data = {
      locus: this.state.selectedLocus,
      allele: this.state.selectedAllele,
    }
    axios.post(`${API_BASE_URL}/resources/alignment`, data, auth).then(
      function (response) {
        this.setState({
          result: response.data
        })
      }.bind(this)
    )
  }

  render() {
    console.log(this.state.result)
    return (
      <div className="container is-fluid">
        <br />

        <p>
          <strong>Please Pick Locus and Allele for Sequence alignment</strong>
        </p>
        <br />
        <div>
          <InputGroup compact>
            <Select
              style={{ width: 120 }}
              onChange={value => this.setState({ selectedLocus: value })}
              defaultValue="Select Locus"
            >
              {this.state.locuslist.map(sample => (
                <Option value={sample.locus} key={sample.locus}>
                  {sample.locus}
                </Option>
              ))}
            </Select>
            <Select
              style={{ width: 120 }}
              onChange={value => this.setState({ selectedAllele: value })}
              defaultValue="Select Allele"
            >
              {this.state.alleleInfo.map(sample => {
                if (sample.locus === this.state.selectedLocus)
                  return (
                    <Option value={sample.allele} key={sample.allele}>
                      {sample.allele}
                    </Option>
                  )
                return null
              })}
            </Select>
            <Button type="primary" onClick={() => this.sequenceAlign()}>
              Go
            </Button>
          </InputGroup>
          <br />
          <p>
            <strong>Locus : </strong>
            {this.state.selectedLocus}
            <strong> Allele : </strong>
            {this.state.selectedAllele}
          </p>
          <br />
          <div>
            <div className="columns">
              <div className="column is-1">
                <strong>Sample_Year</strong>
              </div>
              <div className="column is-1">
                <strong>Sample_ID</strong>
              </div>
              <div className="column">
                <strong>Repeated Sequence</strong>
              </div>
              <div className="column is-1">
                <strong>Read Count</strong>
              </div>
              <div className="column is-2">
                <strong>Pattern</strong>
              </div>
            </div>
            <br />
            <div className="columns">
              <div className="column">
                {this.state.result.map(entry => (
                  <div
                    key={entry.Sample_Year + entry.Sample_ID + entry.Read_Count}
                  >
                    <AlignmentEntry data={entry} />
                  </div>
                ))}
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    )
  }
}

export default PageAdminSequence;