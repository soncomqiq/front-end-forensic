import React from 'react'
import { Button, Upload, message } from 'antd';
import { ACCESS_TOKEN, API_BASE_URL } from '../constants';
import Axios from 'axios';

class PageUploadCEData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const props1 = {
            name: 'file',
            action: API_BASE_URL + '/file/uploadFileTxt',
            headers: {
                authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
            },
            onChange(info) {
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                    const auth = { 'headers': { 'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN) } }
                    Axios.get(API_BASE_URL + '/resources/strlocusinfo/uploadtextfile', auth)
                        .then((res) => {
                            if(res.data == "Please Enter PersonID first."){
                                message.error(`${info.file.name} file upload failed. ${res.data}`);
                            }else {
                                message.success(`${info.file.name} file uploaded successfully`);
                            }

                        })
                        .catch((err) => {
                            message.error(`${info.file.name} file upload failed. because ${err}`);
                        })
                    
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            },
        };
        return (
            <div>
                <Upload {...props1}>
                    <Button type="primary" shape="round" icon="upload" >Add by txt file</Button>
                </Upload>
                <br />
                <h1>File Format</h1>
                <p>The first line is Sample ID</p>
                <p>The second line is Sample Year</p>
                <p>all the rest line are CE Data as pattern 'locus','allele1','allele2'</p>
            </div>
        )
    }
}

export default PageUploadCEData;