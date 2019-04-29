import React from 'react';
import axios from 'axios';
const uuid = require('uuid/v4');

class AddUser extends React.Component{

    state = {
        id: uuid(),
        name: '',
        username: '',
        email: ''
    };

    submitHandle = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:3000/addUser',
            this.state)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })

    }

    updateHandle = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return(
            <div>
                AddUser
                <form onSubmit={this.submitHandle}>
                    <input type='text'
                           placeholder='Id'
                           name='id'
                           id='id'
                           onChange={this.updateHandle}
                           value={this.state.id} disabled={true}/>
                    <input type='text'
                           placeholder='Name'
                           name='name'
                           id='name'
                           onChange={this.updateHandle}
                           value={this.state.name}/>
                    <input type='text'
                           placeholder='Username'
                           name='username'
                           id='username'
                           onChange={this.updateHandle}
                           value={this.state.username}/>
                    <input type='email'
                           placeholder='Email'
                           name='email'
                           id='email'
                           onChange={this.updateHandle}
                           value={this.state.email}/>
                    <input type='submit' value='Add User'/>
                </form>
            </div>

        )
    }
}
export default AddUser