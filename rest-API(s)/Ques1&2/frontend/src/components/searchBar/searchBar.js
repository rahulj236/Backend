import React, { Component } from 'react';
import axios from 'axios';

class searchBar extends Component {
    constructor() {
      super();
      this.state = {
        userList: []
      }
    }
    
    handleOnChange = (e) => {
      axios.get(`http://127.0.0.1:3000/users?username=${e.target.value}`)
        .then((response) => {
          this.setState({
            userList: response.data
          })
        })
        .catch((err) => {
          console.log(err);
        })
    }
  
  
  
    render() {
      return (
        <div className="App">
          <input type="search"
            placeholder="Type Name"
            name="username"
            onChange={this.handleOnChange}
          />

          <ul>
            {this.state.userList.map((user) => {
              return (
                <li key={user.id}>{user.username}</li>
              )
            })}
          </ul>
  
        </div>
      );
    }
  }
  
  export default searchBar;
  
  
  