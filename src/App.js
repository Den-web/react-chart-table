import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import AuthService from './pages/Login/AuthService';
import withAuth from './pages/Login/withAuth';
import DataTable from "./components/dataTable/DataTable";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import data from './Data/test.json';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

const Auth = new AuthService();

class App extends Component {

    handleLogout() {
        Auth.logout();
        this.props.history.replace('/login');
    }

    render() {
        return (
            <div>
                <Header/>

                <span className="form-submit logout" onClick={this.handleLogout.bind(this)}>Logout</span>
                <div className="container">
                    <div className="row">
                        <div className='col-md-12 tableMargin'>
                            <div className='panel panel-default jumbotron-fluid'>
                                <div className='panel-heading text-center'>Table of contents airlines from user - "{this.props.user.username}"</div>
                                <div className='panel-body'>
                                    <DataTable data={data} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

export default withAuth(App);
