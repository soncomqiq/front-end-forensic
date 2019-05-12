import React from 'react'
import { Button, Upload, message, Table } from 'antd';
import { ACCESS_TOKEN, API_BASE_URL } from '../constants';
import Axios from 'axios';

class PageUploadPersons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const props1 = {
            name: 'file',
            action: API_BASE_URL + '/file/uploadFile',
            headers: {
                authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN),
            },
            onChange(info) {
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                    const auth = { 'headers': { 'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN) } }
                    Axios.get(API_BASE_URL + '/resources/person/ULmanualPerson?type=xlsx', auth)
                        .then((res) => {
                            message.success(`${info.file.name} file uploaded successfully`);
                        })
                        .catch((err) => {
                            message.error(`${info.file.name} file upload failed.`);
                        })

                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            },
        };
        const columns = [{
            title: 'Column',
            dataIndex: 'column',
            key: 'column',
            align: 'center'
        }, {
            title: 'Field',
            dataIndex: 'field',
            key: 'field',
            align: 'center'
        }, {
            title: 'type of data',
            dataIndex: 'type',
            key: 'type',
            align: 'center'
        },];
        const dataSource = [{
            column: '1',
            field: 'Sample Year',
            type: "String",
        }, {
            column: '2',
            field: 'Sample ID',
            type: "String",
        }, {
            column: '3',
            field: 'Citizen ID',
            type: "Number",
        }, {
            column: '4',
            field: 'Name',
            type: "String",
        }, {
            column: '5',
            field: 'Surname',
            type: "String",
        }, {
            column: '6',
            field: 'Gender',
            type: "'male' | 'female'",
        }, {
            column: '7',
            field: 'Region',
            type: "'Central' | 'Northeast' | 'North' | 'South'",
        }, {
            column: '8',
            field: 'Province',
            type: "String",
        }, {
            column: '9',
            field: 'Country',
            type: "Upper Case String",
        }, {
            column: '10',
            field: 'Age',
            type: "Integer",
        }, {
            column: '11',
            field: 'Race',
            type: "String",
        },];
        return (
            <div>
                <Upload {...props1}>
                    <Button type="primary" shape="round" icon="upload" >Add by xlsx file</Button>
                </Upload>
                <br />
                <br />
                <h3>File Format</h3>
                <p>A file contains a several line. one line is one person info. one line consists of 11 columns.</p>
                <Table dataSource={dataSource} columns={columns} pagination={false}/>
                &nbsp;
            </div>
        )
    }
}

export default PageUploadPersons;