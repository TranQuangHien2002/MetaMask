import React from 'react';
import Menu from './component/Menu';
import './AppAccountSend.css';
import arrow from '../src/images/icons/arrow-left-xanh.png'
import logo from '../src/images/logo/eth_logo.png'
import right from '..//src/images/icons/right.png'
import info from '../src/images/icons/infoblack.svg'

function AppAccountSend({ close,selectedAccount, onEdit }) {
    const handleClose = () => {
        close();
      };
      
    return (
        <div id="app-content">
            <div className="multichain-app-header">
                <div className="multichain-app-header__content">
                    <Menu />
                </div>
                <div className='main-container-wrapper-send'>
                    <div className='page-container'>
                        <div className='confirm-page-container-header'>
                            <div className='confirm-page-container-header__row'>
                                <button className="confirm-page-container-header__back-button-container" onClick={() => onEdit(true)}>
                                    <img
                                        src={arrow}
                                        alt=""
                                        style={{
                                            width: "16px",
                                            height: "16px",
                                            verticalAlign: "middle"
                                        }}
                                    ></img>
                                    <span className='confirm-page-container-header__row-title'>Chỉnh sửa</span>
                                </button>
                            </div>
                            <div className='confirm-page-container-header__sender'>
                                <div class="sender-to-recipient__party-sender">
                                    <div class="sender-to-recipient__sender-icon">
                                        <img
                                            src={logo}
                                            alt="img"
                                            style={{
                                                width: "24px",
                                                height: "24px",
                                                borderRadius: "50%"
                                            }}
                                        ></img>
                                    </div>
                                    <div class="sender-to-recipient__tooltip-wrapper">
                                        <p>{selectedAccount.name}</p>
                                    </div>
                                </div>
                                <div class="sender-to-recipient__arrow-container">
                                    <div class="sender-to-recipient__arrow-circle">
                                        <i class="sender-to-recipient__arrow-circle__icon">
                                            <img
                                                src={right}
                                                alt="img"
                                                style={{
                                                    width: "30px",
                                                    height: "30px",
                                                }}
                                            ></img>
                                        </i>
                                    </div>
                                </div>
                                <div class="sender-to-recipient__party-receiver">
                                    <div class="sender-to-recipient__sender-icon">
                                        <img
                                            src={logo}
                                            alt="img"
                                            style={{
                                                width: "24px",
                                                height: "24px",
                                                borderRadius: "50%"
                                            }}
                                        ></img>
                                    </div>
                                    <div class="sender-to-recipient__tooltip-wrapper">
                                        <p>{selectedAccount.name}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='confirm-page-container-content'>
                            <div className='confirm-page-container-content__summary'>
                                <div className='confirm-page-container-content__summary__action'>
                                    <span class="confirm-page-container-summary__action__name">Gửi TBNB</span>
                                </div>
                                <div className='confirm-page-container-content__summary__title'>
                                    <div class="currency-display-component" title="0">
                                        <span class="currency-display-component__prefix"></span>
                                        <span class="currency-display-component__text">0</span>
                                    </div>
                                </div>
                            </div>
                            <div className='confirm-page-container-content__details'>
                                <div className="transaction-alerts">
                                    <div className='edit-gas-fee-button'>
                                        <span className='edit-gas-fee-button__icon' style={{ width: "21px", height: "20px" }}>🦊</span>
                                        <span className='edit-gas-fee-button__label' style={{ marginRight: "4px" }}>Thị trường</span>
                                        <span className='edit-gas-fee-button__btn'>
                                            <img
                                                src={arrow}
                                                alt=""
                                                style={{
                                                    width: "13px",
                                                    height: "13px",
                                                    verticalAlign: "middle",
                                                    transform: "rotate(180deg)"
                                                }}
                                            ></img>
                                        </span>
                                    </div>
                                </div>
                                <div className='transaction-detail-rows'>
                                    <div className='transaction-detail-item__top'>
                                        <div className='transaction-detail-item__row'>
                                            <h6>
                                                <div className='gas-details-item-title'>Gas</div>
                                                <span className='gas-details-item-title__estimate' style={{ marginTop: "2px" }}>(ước tính)</span>
                                                <div className='info-tooltip'>
                                                    <img
                                                        src={info}
                                                        alt=""
                                                        style={{
                                                            width: "15px",
                                                            height: "15px",
                                                        }}
                                                    ></img>
                                                </div>
                                            </h6>
                                            <div className='transaction-detail-item__detail-values'>
                                                <h6>
                                                    <div class="currency-display-component" title="">
                                                        <span class="currency-display-component__prefix"></span>
                                                        <span class="currency-display-component__text">0.000105</span>
                                                        <span class="currency-display-component__suffix"></span>
                                                    </div>
                                                </h6>
                                                <h6>
                                                    <div class="currency-display-component" title="">
                                                        <span class="currency-display-component__prefix"></span>
                                                        <span class="currency-display-component__text">0.000105</span>
                                                        <span class="currency-display-component__suffix">TBNB</span>
                                                    </div>
                                                </h6>
                                            </div>
                                        </div>
                                        <div className='transaction-detail-item__row'>
                                            <div className='transaction-detail-item-ability-title'>
                                            </div>
                                            <h6 className='transaction-detail-item-fee-title'>
                                                <div> <strong>Phí tối đa:</strong> </div>
                                                <div class="currency-display-component__transaction" title="">
                                                    <span class="currency-display-component__prefix"></span>
                                                    <span class="currency-display-component__text">0.000105</span>
                                                    <span class="currency-display-component__suffix">TBNB</span>
                                                </div>
                                            </h6>
                                        </div>
                                    </div>
                                    <div className='transaction-detail-item__bottom'>
                                        <div className='transaction-detail-item__row'>
                                            <h6>
                                                <div className='gas-details-item-title'>Tổng</div>
                                            </h6>
                                            <div className='transaction-detail-item__detail-values'>
                                                <h6>
                                                    <div class="currency-display-component" title="">
                                                        <span class="currency-display-component__prefix"></span>
                                                        <span class="currency-display-component__text">0.000105</span>
                                                        <span class="currency-display-component__suffix"></span>
                                                    </div>
                                                </h6>
                                                <h6>
                                                    <div class="currency-display-component" title="">
                                                        <span class="currency-display-component__prefix"></span>
                                                        <span class="currency-display-component__text">0.000105</span>
                                                        <span class="currency-display-component__suffix">TBNB</span>
                                                    </div>
                                                </h6>
                                            </div>
                                        </div>
                                        <div className='transaction-detail-item__row'>
                                            <div className='transaction-detail-item-ability-title'>
                                                <h6 style={{ fontWeight: "100", color: "#535a61" }}>Số lượng + phí gas</h6>
                                            </div>
                                            <h6 className='transaction-detail-item-fee-title'>
                                                <div> <strong>Số lượng tối đa:</strong> </div>
                                                <div class="currency-display-component__transaction" title="">
                                                    <span class="currency-display-component__prefix"></span>
                                                    <span class="currency-display-component__text">0.000105</span>
                                                    <span class="currency-display-component__suffix">TBNB</span>
                                                </div>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='confirm-page-container-content__footer send-account-footer'>
                                <footer>
                                    <button  onClick={handleClose} className='btn-footer-close'>Từ chối</button>
                                    <button className='btn-footer-continue'>Tiếp theo</button>
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AppAccountSend;

