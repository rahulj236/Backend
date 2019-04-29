import React, {Component} from 'react';
import axios from 'axios';

class About extends Component{
    constructor(props){
        super(props);
        this.state={
            desc:""
        }
    }

    componentDidMount(){
        axios.get("http://localhost:3000/about")
        .then((response)=>{
            this.setState({
                desc:response.data
            })
        })
        .catch((err)=>{
            console.log("error: ", err);
        })
    };

    render(){
        return(
            <div>
                <h1>About Us</h1>
                <h2>{this.state.desc}</h2>          
            
            </div>
        )
    }
}
export default About