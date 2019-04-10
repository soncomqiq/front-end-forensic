import React, { Component } from 'react'
import axios from 'axios'
import {
  Upload, Button, Icon, message,
} from 'antd';
import LogoUpload from '../images/LogoUpload.png'
import { uploadFileExcelAPI } from '../util/APIUtils'
import { API_BASE_URL, ACCESS_TOKEN } from '../constants';

export default class UploadFileExcel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedFile: null, loaded: '', message: null, uploading: false
    }
  }

  handleUpload = async () => {
    this.setState({
      uploading: true
    })
    this.setState({ loaded: '0/7', message: 'Uploading file' });

    var formData = new FormData();
    formData.append('file', this.state.selectedFile, this.state.selectedFile.name);

    await fetch(API_BASE_URL + "/uploadFile", {
      headers: { 'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN) },
      method: 'POST',
      body: formData
    }).then((res) => { this.setState({ loaded: '1/7', message: 'Bring data to Person table' }) })
    const auth = { 'headers': { 'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN) } }
    await axios.get(API_BASE_URL + "/uploadpersonfile", auth).then((res) => this.setState({ loaded: '2/7', message: 'Bring data to CE_Data table' }))
    await axios.get(API_BASE_URL + "/uploadcedatafile", auth).then((res) => this.setState({ loaded: '3/7', message: 'Bring data to Forenseq table' }))
    await axios.get(API_BASE_URL + "/uploadforenseqfile", auth).then((res) => this.setState({ loaded: '4/7', message: 'Bring data to ForenseqX table' }))
    await axios.get(API_BASE_URL + "/uploadforenseqxfile", auth).then((res) => this.setState({ loaded: '5/7', message: 'Bring data to ForenseqY table' }))
    await axios.get(API_BASE_URL + "/uploadforenseqyfile", auth).then((res) => this.setState({ loaded: '6/7', message: 'Bring data to iSNPs table' }))
    await axios.get(API_BASE_URL + "/uploadisnpsfile", auth).then((res) => this.setState({ loaded: '7/7', message: 'Successed' }))
    this.setState({
      uploading: false
    })
  }

  handleselectedFile = event => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: '0/0',
      message: 'File is selected'
    })
  }

  render() {
    const uploading = this.state.loading;
    return (
      <div className="App">
        <div><img src={LogoUpload} /></div>
        <input type="file" name="" id="" onChange={this.handleselectedFile} />
        <Button
          type="primary"
          onClick={this.handleUpload}
          // disabled={fileList.length === 0}
          loading={uploading}
          style={{ marginTop: 16 }}
        >
          {uploading ? 'Uploading' : 'Start Upload'}
        </Button>
        <div> {this.state.loaded} </div>
        <div> {this.state.message} </div>
      </div >
    )
  }
}
