import React, { Component } from 'react';

class UserView extends Component {
    render() {
        return (
            <div>
                <table border="1">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Username</td>
                            <td>Email</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {this.props.userData.map((users, index) => {
                            return (
                                <tr key={index}>
                                    <td>{users.id}</td>
                                    <td>{users.username}</td>
                                    <td>{users.email}</td>
                                    <td>
                                        <button onClick={() => this.props.handleOnDelete(users.id)}>Delete User</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default UserView