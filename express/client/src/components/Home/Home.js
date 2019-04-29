import React, { Component } from 'react';
import axios from 'axios';
import UserView from '../UserView/UserView'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:3000/")
            .then((response) => {
                this.setState({
                    userList: response.data
                })
            })
            .catch((err) => {
                console.log("error: ", err);
            })
    };

    handleOnDelete = (id) => {
        console.log("id is ",id);
        axios.delete(`http://localhost:3000/deleteUser?id=${id} `)
        .then((response)=>{
            this.setState({
                userList: response.data
            })
        })
        .catch((err)=>{
            console.log("error: ",err)
        })
    };

    render() {
        console.log(this.state.userList);
        const { userList } = this.state
        return (
            <div>
                <UserView
                    userData={userList}
                    handleOnDelete={this.handleOnDelete}
                />
            </div>
        )
    }
}
export default Home