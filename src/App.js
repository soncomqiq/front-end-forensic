import React, { Component } from 'react';
import PageSearch from './Page/PageSearch';
import { Route, withRouter } from 'react-router-dom';
import GuestNavbar from './NavBar/GuestBar';
import PageUploadFileExcel from './Page/PageUploadFileExcel';
import PageStatsByGraph from './Page/PageStatsByGraph';
import { Layout, Menu, Breadcrumb } from 'antd';
import AdminNavbar from './NavBar/AdminBar';
import Login from './user/login/Login'
import SignUp from './user/signup/Signup'
import 'bulma/css/bulma.css'
import './css/Box.css'

import { getCurrentUser } from './util/APIUtils';
import { ACCESS_TOKEN } from './constants';
import { notification } from 'antd';
import PageiSNPStat from './Page/PageiSNPStats';
import { Typography } from 'antd';
import LogoUpload from './images/LogoUpload.png'
import PageAdminSequence from './Page/PageSequenceAlignment';
import StaticByMapPage from './Page/PageStatsByMap';
import PageListPersons from './Page/PageListPersons';
import Body from './Page/PageKinshipAnalysis';
import LoadingIndicator from './common/LoadingIndicator'
import PageUploadPersons from './Page/PageUploadPersons';
import PageUploadCEData from './Page/PageUploadCEData';
import PageViewSingleID from './Page/PageViewSingleID';

const { Title, Text } = Typography;
const { Header, Content, Footer } = Layout;
const Home = props => (
  <div>
    <Title level={2}>Welcome to FGxBIO</Title>
    <br />
    <img src={LogoUpload} />
    <br />
    <br />
    <Title level={2}><Text>The Database for Short Tandem Repeat (STR) Sequence</Text></Title>
  </div>
)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      isAuthenticated: false,
      isLoading: false,
      current: 'home'
    }
    this.handleLogout = this.handleLogout.bind(this);
    this.loadCurrentUser = this.loadCurrentUser.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

    notification.config({
      placement: 'topRight',
      top: 70,
      duration: 3,
    });
  }

  loadCurrentUser() {
    this.setState({
      isLoading: true
    });
    getCurrentUser()
      .then(response => {
        this.setState({
          currentUser: response,
          isAuthenticated: true,
          isLoading: false
        });
      }).catch(error => {
        this.setState({
          isLoading: false
        });
      });
  }

  componentDidMount() {
    this.loadCurrentUser();
  }

  handleLogout(redirectTo = "/", notificationType = "success", description = "You're successfully logged out.") {
    localStorage.removeItem(ACCESS_TOKEN);

    this.setState({
      currentUser: null,
      isAuthenticated: false
    });

    this.props.history.push(redirectTo);

    notification[notificationType]({
      message: 'Forenseq App',
      description: description,
    });
  }

  handleLogin() {
    notification.success({
      message: 'Forenseq App',
      description: "You're successfully logged in.",
    });
    this.loadCurrentUser();
    this.props.history.push("/");
  }

  render() {
    if (this.state.isLoading) {
      return <LoadingIndicator />;
    }
    console.log("auth " + this.state.isAuthenticated)
    const isAuthenticated = this.state.isAuthenticated;
    // this.loadCurrentUser();
    return (
      <Layout className="layout">
        <div className="my-app">
          {
            this.state.isAuthenticated ?
              <AdminNavbar onLogout={this.handleLogout} /> :
              <GuestNavbar handleLogin={this.handleLogin} />
          }
          <Content style={{ padding: '0 0px' }}>
            <div style={{ background: '#e2e2e2', padding: 24, minHeight: 522 }}>
              <div className="App container">
                <Route exact path="/" component={Home} />
                <Route exact path="/Login" render={(props) => <Login onLogin={this.handleLogin} {...props} />} />
                <Route exact path="/search" render={(props) => <PageSearch isAuthenticated={this.state.isAuthenticated} {...props} />} />
                <Route exact path="/stats/graph" component={PageStatsByGraph} />
                <Route exact path="/stats/map" component={StaticByMapPage} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/analysis/kinship" component={Body} />
                {isAuthenticated ? <Route exact path="/adddata" component={PageUploadFileExcel} /> : null}
                {isAuthenticated ? <Route exact path="/isnpstat" component={PageiSNPStat} /> : null}
                {isAuthenticated ? <Route exact path="/seqalign" component={PageAdminSequence} /> : null}
                {isAuthenticated ? <Route exact path="/listpersons" component={PageListPersons} /> : null}
                {isAuthenticated ? <Route exact path="/uploadpersons" component={PageUploadPersons} /> : null}
                {isAuthenticated ? <Route exact path="/uploadcedata" component={PageUploadCEData} /> : null}
                {isAuthenticated ? <Route exact path="/user/view/:yid/:id" component={PageViewSingleID} /> : null}
              </div>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center', backgroundColor: '#FFFFFF' }}><Text style={{ color: 'black' }}>&copy; 2019 Chulalongkorn University All Rights Reserved</Text></Footer>
        </div>
      </Layout>
    )
  }
}

export default withRouter(App);
