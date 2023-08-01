import React from 'react'

import connect from '../images/icons/connect.svg'
import diagram from '../images/icons/diagram.svg'
import message from '../images/icons/message-question.svg'
import settingblack from '../images/icons/settingblack.svg'
import lock from '../images/icons/lock.svg'


function MenuItem() {
    return (
        <div className="menu__container">
            <button className='menu-item'>
                <img
                    src={connect}
                    alt=''
                    style={{
                        margin: "5px",
                        width: "16px",
                        height: "16px",
                    }}
                ></img>
                <div>Trang web đã kết nối</div>
            </button>
            <button className='menu-item'>
                <a className='menu-item-link' href='https://portfolio.metamask.io/?metametricsId=0x90afb201e6e924672d41c88c0cf8a3d9aad2a9bef1ba48a39c1ae2760c980d50' target='_blank' rel="noreferrer">
                    <img
                        src={diagram}
                        alt=''
                        style={{
                            margin: "5px",
                            width: "16px",
                            height: "16px",
                        }}
                    ></img>
                    <div>Portfolio view</div>
                </a>
            </button>
            <button className='menu-item'>
                <a className='menu-item-link' href='https://support.metamask.io/hc/vi' target='_blank' rel="noreferrer">
                    <img
                        src={message}
                        alt=''
                        style={{
                            margin: "5px",
                            width: "16px",
                            height: "16px",
                        }}
                    ></img>
                    <div>Hỗ trợ</div>
                </a>
            </button>
            <button className='menu-item'>
                <img
                    src={settingblack}
                    alt=''
                    style={{
                        margin: "5px",
                        width: "16px",
                        height: "16px",
                    }}
                ></img>
                <div>Cài đặt</div>
            </button>
            <button className='menu-item'>
                <img
                    src={lock}
                    alt=''
                    style={{
                        margin: "5px",
                        width: "16px",
                        height: "16px",
                    }}
                ></img>
                <div>Lock MetaMask</div>
            </button>
        </div>
    )
}

export default MenuItem