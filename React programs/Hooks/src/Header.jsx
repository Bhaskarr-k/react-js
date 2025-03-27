import React, { PureComponent } from 'react'
import logo from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.min.css';



export default class Headerclass extends PureComponent {
    render() {
        return (
            <>
                <header className='sticky-top'>
                    <div className='nav'>
                        <div className='logo'>
                            <img className='logo' src="https://www.achieversit.com/assets/images/logo-white.png" alt={logo} />  
                        </div>
                        <ul className='d-flex justify-content-start'>
                            <li>home</li>
                            <li>contact us</li>
                            <li>existing students</li>
                            <li>about us</li>
                            <li>login</li>
                        </ul>
                    </div>
                </header>
            </>
        )
    }
}