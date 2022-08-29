import React, {Component} from 'react'
import withRouter from './withRouter.jsx'
import {useNavigate} from 'react-router-dom'
import WelcomeComponent from './WelcomeComponent.jsx'
import './LoginComponent.css'
import AuthenticationService from './AuthenticationService.js'




class LoginComponent extends Component {

constructor (props) {
super(props)
this.state={
username:"",
password:"",
hasLoginFailed:false,
showSuccessMessage:false
}
this.handleChange=this.handleChange.bind(this)
this.loginClicked=this.loginClicked.bind(this)

}

handleChange(event){
this.setState({
[event.target.name]:event.target.value
})
// console.log(this.state)
}

loginClicked(){
       if (this.state.username==="xyz" && this.state.password==="xyz")
                this.props.navigate("/welcome")

//            this.setState({showSuccessMessage:true,hasLoginFailed:false})
       else
           this.setState({hasLoginFailed:true, showSuccessMessage:false})

}

render() {
return (
<div>
    <h1>Login</h1>
    <div className='container'>
    <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} />
{/*     <ShowSuccessMessage showSuccessMessage={this.state.showSuccessMessage} /> */}
    Username : <input type='text' name='username' onChange={this.handleChange}/>
    Password : <input type='password' name='password' onChange={this.handleChange}/>
    <button className='btn-success'  onClick={this.loginClicked}>Login</button>
    </div>
</div>


)
}
}

        function ShowInvalidCredentials (props){
            if (props.hasLoginFailed)
                return <div className='alert alert-warning'>Invalid Credentials</div>
            else
                return null
       }

//        function ShowSuccessMessage (props) {
//             if (props.showSuccessMessage)
//                 return <div> Login Successful</div>
//             else
//                 return null
//        }

export default withRouter(LoginComponent)