import React, {Component} from 'react'
import { BrowserRouter as Router,Routes ,Route ,Link} from 'react-router-dom'

class HeaderComponent extends Component {
render (){
return (
    <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div><a href='https://www.oyorooms.com/' className="navbar-brand">OYO</a></div>
                             <ul className="navbar-nav">
                                <li><Link className="nav-link" to='/newformpage'>Create new form</Link></li>
                                <li><Link className="nav-link" to='/yourformspage'>Forms by you</Link></li>
                                <li><Link className="nav-link" to='/oldformspage'>Forms for you</Link></li>
                            </ul>
                            <ul className="navbar-nav navbar-collapse justify-content-end">
                                <li><Link className="nav-link" to='/login'>Login</Link></li>
                                <li><Link className="nav-link" to='/logout'>Logout</Link></li>
                            </ul>
                        </nav>
    </header>
)
}
}

export default HeaderComponent