import React from 'react'
import './TabHoatDong.css'
import message from '../images/icons/message-question.png'

function TabHoatDong() {
    return (
        <div className="content-token">
            <div className='transaction-list'>
                <div className='transaction-list__empty'>
                    <div className='transaction-list__empty-text'>
                        Bạn không có giao dịch nào
                    </div>
                    <div className='transaction-list__empty-link'>
                        <button className="link-help-button">
                            <img
                                src={message}
                                alt=""
                                style={{
                                    width: "15px",
                                    height: "15px",
                                    marginTop: "-5px"
                                }}
                            ></img>
                            <a href="https://support.metamask.io/hc/vi" target="_blank" rel="noreferrer">
                                <span>Hỗ trợ về MetaMask</span>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TabHoatDong