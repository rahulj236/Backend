import React, { Component } from 'react';
import axios from 'axios';
import StudentView from '../studentView/studentView'

class filterStudents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            branch: "",
            studentList: []
        }
        this.filterBranch()
    }

    updateHandle = (e) => {
        this.setState({
            branch: e.target.value
        }, this.filterBranch);
    }

    filterBranch = () => {
        axios.get(`http://127.0.0.1:3000/students?branch=${this.state.branch}`)
        .then((response) => {
            console.log("response", response.data);
            this.setState({
                studentList: response.data
            })
        })
        .catch((err) => {
            console.log(err);
        })    
    }

    render() {
        return (
            <div>
                <select name="branch" id="" onChange={this.updateHandle}>
                    <option value="">Select Branch</option>
                    <option value="CSE">CSE</option>
                    <option value="ECE">ECE</option>
                    <option value="EEE">EEE</option>
                </select>

                <StudentView studentList={this.state.studentList} />
            </div>
        )
    }
}
export default filterStudents