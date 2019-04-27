import React from 'react'
import { Input, Button, Form, Col, Row, Statistic, Progress } from 'antd';
import Axios from 'axios';
import { API_BASE_URL } from '../constants';
import { Typography } from 'antd';

const { Text } = Typography;
const { TextArea } = Input;

class PageSearchByText extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            totalSample: 0,
            totalMatchSample: 0,
            isClicked: false,
            listMatchSample: []
        }
    }

    componentWillMount() {
        Axios.get(API_BASE_URL + "/resources/person/numberofperson").then((Response) => {
            console.log(Response.data)
            this.setState({
                totalSample: Response.data
            })
        })
    }

    handleExample = () => {
        this.props.form.setFieldsValue({
            search: 'D12S391:19,25\nTPOX:8\nD13S317:8'
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let data = [];
                let search = values.search;
                console.log('Received values of form: ', search);
                var tmp = search.replace(/(\r\n|\n|\r)/gm, '$')
                let tmp1 = tmp.split("$");
                let tmp2 = tmp1.map((element) => element.trim()); // trim each string
                tmp2.map((element) => {
                    let tmp4 = element.split(":");
                    let tmp5 = tmp4[1].split(",");
                    tmp5.map((ele) => {
                        data.push({ "locus": tmp4[0], "allele": ele });
                    });
                    console.log(data);
                });
                console.log('data:', data);
                Axios.post(API_BASE_URL + '/resources/findpersonbylocus', data).then((Response) => {
                    console.log(Response.data)
                    this.setState({
                        totalMatchSample: Response.data.length,
                        listMatchSample: Response.data,
                        isClicked: true
                    })
                });
            }
        });
    }

    render() {
        const isAuthenticated = this.props.isAuthenticated
        const isClicked = this.state.isClicked
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Col>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item>
                            {getFieldDecorator('search', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your text search!'
                                    }
                                ]
                            })(<TextArea placeholder="CSF1PO:5,6" autosize />)}
                        </Form.Item>
                        <Form.Item>
                            <Col span={24} style={{ textAlign: 'center' }}>
                                <Button type="primary" htmlType="submit">
                                    Search
                                </Button>
                                {' '}
                                <Button type="dashed" onClick={this.handleExample}>Example</Button>
                            </Col>
                        </Form.Item>
                    </Form>
                    <div>
                        <Statistic title="Matched Sample" value={this.state.totalMatchSample} suffix={"/ " + this.state.totalSample} />
                        <br />
                        {isAuthenticated && isClicked ? <div>
                            {this.state.listMatchSample.map((data) => {
                                return (
                                    <div>
                                        <Text type="warning">Sample Year: {data[0]}, Sample ID: {data[1]}</Text>
                                    </div>
                                )
                            })}
                        </div> : null}
                    </div>
                </Col>
                <Col>
                    <div className="column">
                        <p><strong>The pattern example can be found here</strong></p>
                        <p>[Locus]:[Allele],[Allele]<br />[Locus]:[Allele]</p>
                    </div>
                </Col>
            </div>
        );
    }
}

export default Form.create()(PageSearchByText);