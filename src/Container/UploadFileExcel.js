import React, { Component } from 'react'
import axios from 'axios'
import {
  Upload, Button, Icon, message,
} from 'antd';
import LogoUpload from '../images/LogoUpload.png'
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

    await fetch(API_BASE_URL + "/file/uploadFile", {
      headers: { 'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN) },
      method: 'POST',
      body: formData
    }).then((res) => { this.setState({ loaded: '1/7', message: 'Bring data to Person table' }) })
    const auth = { 'headers': { 'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN) } }
    await axios.get(API_BASE_URL + "/resources/person/uploadpersonfile", auth).then((res) => this.setState({ loaded: '2/7', message: 'Bring data to CE_Data table' }))
    await axios.get(API_BASE_URL + "/resources/strlocusinfo/uploadcedatafile", auth).then((res) => this.setState({ loaded: '3/7', message: 'Bring data to Forenseq table' }))
    await axios.get(API_BASE_URL + "/resources/forenseq/uploadforenseqfile", auth).then((res) => this.setState({ loaded: '4/7', message: 'Bring data to ForenseqX table' }))
    await axios.get(API_BASE_URL + "/resources/forenseqx/uploadforenseqxfile", auth).then((res) => this.setState({ loaded: '5/7', message: 'Bring data to ForenseqY table' }))
    await axios.get(API_BASE_URL + "/resources/forenseqy/uploadforenseqyfile", auth).then((res) => this.setState({ loaded: '6/7', message: 'Bring data to iSNPs table' }))
    await axios.get(API_BASE_URL + "/resources/isnps/uploadisnpsfile", auth).then((res) => this.setState({ loaded: '7/7', message: 'Successed' }))
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
    const uploading = this.state.uploading;
    const fileList = this.state.selectedFile;
    return (
      <div className="App">
        <div><img src={LogoUpload} /></div>
        <br />
        <input type="file" name="" id="" onChange={this.handleselectedFile} />
        <br />
        <Button
          type="primary"
          onClick={this.handleUpload}
          disabled={fileList === null}
          loading={uploading}
          style={{ marginTop: 16 }}
        >
          {uploading ? 'Uploading' : 'Start Upload'}
        </Button>
        <br />
        <br />
        {(fileList === null) ?
          null : (<div style={{ padding: "5px", border: "1px solid powderblue" }}>
            <div> {this.state.loaded} </div>
            <div> {this.state.message} </div>
          </div>)
        }
      </div >
    )
  }
}
