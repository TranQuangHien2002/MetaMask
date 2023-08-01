import React, { useState } from 'react';
import close from '../images/icons/close.svg'
import './MenuAvatar.css'
import TokenLink from './TokenLink';

import more from '../images/icons/more-vertical.svg'
import add from '..//images/icons/add.svg'
import ipr from '../images/icons/import.svg'
import hardware from '../images/icons/hardware.svg'


function MenuAvatar({ onClose }) {
    // const [activeAccount, setActiveAccount] = useState(null); nếu muốn tắt thanh xanh bên trái
    const [activeAccount, setActiveAccount] = useState('Account1');
    const handleNetworkClick = (accountName) => {
        setActiveAccount(accountName);
    };
    return (
        <div class="popover-wrap">
            <div className='popover-header'>
                <h2>Chọn một tài khoản</h2>
                <button onClick={onClose}>
                    <img
                        src={close}
                        alt=""
                        style={{
                            width: "15px",
                            height: "15px",
                        }}
                    ></img>
                </button>
            </div>
            <div className='popover-content'>
                <div className='popover-content__box'>
                    <div className={`popover-list ${activeAccount === 'Account1' ? 'selected' : ''}`}
                    onClick={() => handleNetworkClick('Account1')}>
                        <div className='list-item__avatar'>
                            <svg x="0" y="0" width="20" height="20" style={{ borderRadius: "50%", marginRight: "8px" }}>
                                <rect x="0" y="0" width="20" height="20" transform="translate(-0.23089400121079215 4.012750031472015) rotate(165.4 8 8)" fill="#188CF2"></rect>
                                <rect x="0" y="0" width="20" height="20" transform="translate(0.15026451180710063 -6.302670465269929) rotate(344.7 8 8)" fill="#FA8500"></rect>
                                <rect x="0" y="0" width="20" height="20" transform="translate(7.064173132965704 10.241027787744542) rotate(213.3 8 8)" fill="#F5D400"></rect>
                            </svg>
                        </div>
                        <div className='list-item__content'>
                            <div className='content-top'>
                                <div className='account-display-component'>
                                    <span>Account 1</span>
                                </div>
                                <div className='currency-display-component' title="$0.00 USD">
                                    <span className="currency-display-component__prefix"></span>
                                    <span className="currency-display-component__text">$0.00</span>
                                    <span className="currency-display-component__currency">USD</span>
                                </div>
                            </div>
                            <div className='content-bottom'>
                                <div className='code-display-component'>
                                    <p>0xf52...a60b</p>
                                </div>
                                <div className="currency-display-component" title="0 ETH">
                                    <span className="currency-display-component__prefix"></span>
                                    <span className="currency-display-component__text">0</span>
                                    <span className="currency-display-component__text">ETH</span>
                                </div>
                            </div>
                        </div>
                        <div className='list-item__button'>
                            <button>
                                <img
                                    src={more}
                                    alt=""
                                    style={{
                                        width: "15px",
                                        height: "15px",
                                    }}
                                ></img>
                            </button>
                        </div>
                    </div>
                    <div className='popover-link'>
                        <TokenLink
                            img1={add}
                            name1="Add account"
                            img2={ipr}
                            name2="Nhập tài khoản"
                            img3={hardware}
                            name3="Hardware wallet"
                            href="chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/home.html#new-account/connect"
                        ></TokenLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuAvatar