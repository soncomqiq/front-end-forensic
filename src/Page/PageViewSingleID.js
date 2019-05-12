import React from 'react'
import Axios from 'axios';
import { API_BASE_URL, ACCESS_TOKEN } from '../constants';
import { Table, Radio } from 'antd';

class PageViewSingleID extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            CEData: [],
            CEDataX: [],
            CEDataY: [],
            CEDataI: [],
            forenseq: [],
            forenseqY: [],
            forenseqX: [],
            iSNPs: [],
            renderType: 'A',
        }
    }

    componentWillMount() {
        this.renderAllTable();
    }

    renderAllTable = () => {
        const auth = { 'headers': { 'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN) } }
        Axios.get(API_BASE_URL + "/resources/cedata/getByID?sampleYear=" + this.props.match.params.yid
            + "&sampleID=" + this.props.match.params.id, auth)
            .then((res) => {
                let CEData = [];
                let CEDataX = [];
                let CEDataY = [];
                let CEDataI = [];
                res.data.map((record) => {
                    switch (record.type) {
                        case 'Autosomal':
                            CEData.push(record)
                            break;
                        case 'X':
                            CEDataX.push(record)
                            break;
                        case 'Y':
                            CEDataY.push(record)
                            break;
                        case 'iSNPs':
                            CEDataI.push(record)
                            break;
                    }
                })
                // console.log(CEData);
                this.setState({
                    CEData: CEData,
                    CEDataX: CEDataX,
                    CEDataY: CEDataY,
                    CEDataI: CEDataI,
                })
            })
        Axios.get(API_BASE_URL + "/resources/forenseq/getByID?sampleYear=" + this.props.match.params.yid
            + "&sampleID=" + this.props.match.params.id, auth)
            .then((res) => {
                this.setState({
                    forenseq: res.data
                })
            })
        Axios.get(API_BASE_URL + "/resources/forenseqy/getByID?sampleYear=" + this.props.match.params.yid
            + "&sampleID=" + this.props.match.params.id, auth)
            .then((res) => {
                this.setState({
                    forenseqY: res.data
                })
            })
        Axios.get(API_BASE_URL + "/resources/forenseqx/getByID?sampleYear=" + this.props.match.params.yid
            + "&sampleID=" + this.props.match.params.id, auth)
            .then((res) => {
                this.setState({
                    forenseqX: res.data
                })
            })
        Axios.get(API_BASE_URL + "/resources/isnps/getByID?sampleYear=" + this.props.match.params.yid
            + "&sampleID=" + this.props.match.params.id, auth)
            .then((res) => {
                this.setState({
                    iSNPs: res.data
                })
            })
    }

    renderTable() {
        const columnsCE = [{
            title: 'Locus',
            dataIndex: 'id.locus',
            key: 'id.locus',
            align: 'center',
            width: 150,
            sorter: (a, b) => a.id.locus > b.id.locus,
            sortDirections: ['descend', 'ascend'],
        }, {
            title: 'Genotype',
            dataIndex: 'id.genotype',
            key: 'id.genotype',
            align: 'center',
            width: 150,
            sorter: (a, b) => a.id.genotype > b.id.genotype,
            sortDirections: ['descend', 'ascend'],
        }, {
            title: 'From',
            width: 150,
            dataIndex: 'id.from',
            key: 'id.from',
            align: 'center',
            sorter: (a, b) => a.id.from > b.id.from,
            sortDirections: ['descend', 'ascend'],
        },];
        const columns = [{
            title: 'Locus',
            dataIndex: 'forenseqIdentity.locus',
            key: 'forenseqIdentity.locus',
            align: 'center',
            width: 150,
            sorter: (a, b) => a.forenseqIdentity.locus > b.forenseqIdentity.locus,
            sortDirections: ['descend', 'ascend'],
        }, {
            title: 'Allele',
            dataIndex: 'forenseqIdentity.allele',
            key: 'forenseqIdentity.allele',
            align: 'center',
            width: 100,
            sorter: (a, b) => a.forenseqIdentity.allele > b.forenseqIdentity.allele,
            sortDirections: ['descend', 'ascend'],
        }, {
            title: 'Read Count',
            dataIndex: 'forenseqIdentity.read_count',
            key: 'forenseqIdentity.read_count',
            align: 'center',
            width: 150,
            sorter: (a, b) => a.forenseqIdentity.read_count > b.forenseqIdentity.read_count,
            sortDirections: ['descend', 'ascend'],
        }, {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
            align: 'center',
            width: 100,
            sorter: (a, b) => a.type > b.type,
            sortDirections: ['descend', 'ascend'],
        }, {
            title: 'Genotype',
            dataIndex: 'genotype',
            key: 'genotype',
            align: 'center',
            width: 100,
            sorter: (a, b) => a.genotype > b.genotype,
            sortDirections: ['descend', 'ascend'],
        }, {
            title: 'Sequence',
            dataIndex: 'sequence',
            key: 'sequence',
            align: 'left',
            width: 500,
            sorter: (a, b) => a.sequence > b.sequence,
            sortDirections: ['descend', 'ascend'],
            render: (text, record) => (
                <div style={{ whiteSpace: "pre-wrap" , wordBreak: "break-all"}}>
                    {record.sequence}
                </div>
            )
        }];
        const columnsI = [{
            title: 'Locus',
            dataIndex: 'forenseqIdentity.locus',
            key: 'forenseqIdentity.locus',
            align: 'center',
            width: 150,
            sorter: (a, b) => a.forenseqIdentity.locus > b.forenseqIdentity.locus,
            sortDirections: ['descend', 'ascend'],
        }, {
            title: 'Allele',
            dataIndex: 'forenseqIdentity.allele',
            key: 'forenseqIdentity.allele',
            width: 150,
            align: 'center',
            sorter: (a, b) => a.forenseqIdentity.allele > b.forenseqIdentity.allele,
            sortDirections: ['descend', 'ascend'],
        }, {
            title: 'Read Count',
            dataIndex: 'read_count',
            key: 'read_count',
            align: 'center',
            width: 150,
            sorter: (a, b) => a.read_count - b.read_count,
            sortDirections: ['descend', 'ascend'],
        }, {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
            align: 'center',
            width: 150,
            sorter: (a, b) => a.type > b.type,
            sortDirections: ['descend', 'ascend'],
        }, {
            title: 'Genotype',
            dataIndex: 'genotype',
            key: 'genotype',
            align: 'center',
            width: 150,
            sorter: (a, b) => a.genotype > b.genotype,
            sortDirections: ['descend', 'ascend'],
        }];
        switch (this.state.renderType) {
            case 'A':
                return (
                    <div>
                        {/*CE TABLE*/}
                        <br />
                        <h1>CE Data Table</h1>
                        <br />
                        <Table bordered dataSource={this.state.CEData} columns={columnsCE} size="small" />
                        {/*CE FORENSEQ TABLE*/}
                        <br />
                        <h1>Forenseq Table</h1>
                        <br />
                        <Table bordered dataSource={this.state.forenseq} columns={columns} />
                    </div>
                )

            case 'X':
                return (
                    <div>
                        {/*CE TABLE*/}
                        <br />
                        <h1>CE Data Table</h1>
                        <br />
                        <Table bordered dataSource={this.state.CEDataX} columns={columnsCE} size="small" />
                        {/*CE FORENSEQX TABLE*/}
                        <br />
                        <h1>ForenseqX Table</h1>
                        <br />
                        <Table bordered dataSource={this.state.forenseqX} columns={columns} />
                    </div>
                )

            case 'Y':
                return (
                    <div>
                        {/*CE TABLE*/}
                        <br />
                        <h1>CE Data Table</h1>
                        <br />
                        <Table bordered dataSource={this.state.CEDataY} columns={columnsCE} size="small" />
                        {/*CE FORENSEQY TABLE*/}
                        <br />
                        <h1>ForenseqY Table</h1>
                        <br />
                        <Table bordered dataSource={this.state.forenseqY} columns={columns} />
                    </div>
                )

            case 'I':
                return (
                    <div>
                        {/*CE TABLE*/}
                        <br />
                        <h1>CE Data Table</h1>
                        <br />
                        <Table bordered dataSource={this.state.CEDataI} columns={columnsCE} size="small" />
                        {/*CE FORENSEQY TABLE*/}
                        <br />
                        <h1>iSNPs Table</h1>
                        <br />
                        <Table bordered dataSource={this.state.iSNPs} columns={columnsI} />
                    </div>
                )

            default:
                return <div>default</div>
        }
    }

    render() {
        return (
            <div>
                <h>Sample ID : {this.props.match.params.id}</h>
                <br />
                <br />
                <Radio.Group
                    onChange={e => this.setState({ renderType: `${e.target.value}` })}
                    defaultValue="A"
                >
                    <Radio.Button value="A">Autosomal</Radio.Button>
                    <Radio.Button value="X">X</Radio.Button>
                    <Radio.Button value="Y">Y</Radio.Button>
                    <Radio.Button value="I">iSNPs</Radio.Button>
                </Radio.Group>
                {this.renderTable()}
            </div>
        )
    }
}

export default PageViewSingleID;