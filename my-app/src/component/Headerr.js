import React from 'react'

import logo from '../images/logo/metamask-fox.svg'

function Headerr() {
    return (
        <div className="app-header-logo">
            <img src={logo} className="app-logo" alt="logo" />
            <h3>METAMASK</h3>
        </div>
    )
}

export default Headerr