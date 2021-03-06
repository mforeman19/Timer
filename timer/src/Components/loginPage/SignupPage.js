import React, {Component} from 'react';
import Home from '../homePage/home.js'
import Login from './login.js'
import fire from './fire.js';
import Profile from '../profilePage/profile.js'
class SignupPage extends Component{

    constructor(props){
      super(props);
      this.state = {
        user: {},
      }
    }
  
    componentDidMount(){
      this.authListener();
    }
  
    authListener(){
      fire.auth().onAuthStateChanged((user)=>{
      //  console.log(user)
        if(user){
          this.setState({user});
      //    localStorage.setItem('user',user.uid);
        } else{
          this.setState({user: null})
      //    localStorage.removeItem('user');
        }
        console.log(user)
      })
    }
 
    render(){
      
      //If logged in, route back to home page
      return(
        <div className="Routing">
        {/* {this.state.user ?  (<Home user = {this.state.user}/>): (<Login/>)} //if there is user, render home, otherwise push to login */}
        {this.state.user ?  (<Profile/>): (<Login/>)}
        </div>
      )
    }
  }
  
  export default SignupPage;
  
