import React, {Component} from 'react'
import HeaderComponent from './HeaderComponent.jsx'


class OldFormsPage extends Component {
constructor (props){
       super(props)
       this.state={
       forms: [
       {id: 1, description: 'Form 1', publishDate:new Date()},
       {id:2, description :'Form 2', publishDate:new Date()},
       {id:3, description: 'Form 3', publishDate:new Date()   }
       ]
       }
       }
       render(){
       return (
            <div>
                <HeaderComponent/>
                <h1>Forms</h1>
                <div className='container'>
                <table className='table'>
                   <thead>
                        <tr>
                            <th>description</th>
                            <th>Publish Date</th>
                        </tr>
                   </thead>
                   <tbody>
                        {
                        this.state.forms.map (form =>
                        <tr>
                            <td>{form.description}</td>
                            <td>{form.publishDate.toString()}</td>
                        </tr>
                        )
                        }

                   </tbody>
                </table>
                </div>

            </div>
               )
       }
       }
export  default OldFormsPage