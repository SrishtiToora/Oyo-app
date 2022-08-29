import React, {Component} from 'react'
import LoginComponent from './LoginComponent.jsx'
import { BrowserRouter as Router,Routes ,Route ,Link} from 'react-router-dom'
import WelcomeComponent from './WelcomeComponent.jsx'
import YourFormsPage from './YourFormsPage.jsx'
import NewFormPage from './NewFormPage.jsx'
import OldFormsPage from './OldFormsPage.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import AuthenticationService from './AuthenticationService'

class OurApp extends Component {
render() {
return (
<div className='OurApp'>
            <Router>
                <>

                   <Routes>
                        <Route path="/" element= {<LoginComponent/>}/>
                        <Route path="/login" element= {<LoginComponent/>}/>
                        <Route path="/welcome" element= {<WelcomeComponent/>}/>
                        <Route path="/logout" element= {<LogoutComponent/>}/>

                        <Route path="/yourformspage" element= {<YourFormsPage/>}/>
                        <Route path="/newformpage" element= {<NewFormPage/>}/>
                        <Route path="/oldformspage" element= {<OldFormsPage/>}/>
                        <Route path='*' element={<ErrorComponent/>}/>
                   </Routes>
                </>
            </Router>
</div>


)
}
}

function ErrorComponent(){
return <div>Error occured</div>
}

export default OurApp