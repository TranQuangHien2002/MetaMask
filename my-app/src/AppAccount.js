import React, { useState } from 'react';
import Menu from './component/Menu';
import './AppAccount.css';
import closeimg from './images/icons/close.svg'
import logo from '../src/images/logo/eth_logo.png'
import retweet from '../src/images/icons/Retweet.png'
import info from '../src/images/icons/infoblack.svg'
import AppAccountSend from './AppAccountSend'
function AppAccount({ close, goBackToAppSend, selectedAccount }) {
  const handleClose = () => {
    close();
  };

  const [currencyValue, setCurrencyValue] = useState(0);
  const [isEthToUsd, setIsEthToUsd] = useState(true);
  // Thay đổi state title
  const [sendAccountTitle, setSendAccountTitle] = useState('Gửi');
  const [sendA, setA] = useState('Hủy');

  const handleSwapCurrency = () => {
    setIsEthToUsd(!isEthToUsd);
  };

  //btn tiếp tục
  const [showAppAccountSend, setShowAppAccountSend] = useState(false); // Add this state

  //btn huỷ chỉnh sửa
  const [isEditVisible, setIsEditVisible] = useState(false);

  const handleContinue = () => {
    // Toggle the visibility of AppAccountSend component
    setShowAppAccountSend(true);
  };

  //chỉnh sửa
  const handleEdit = () => {
    setShowAppAccountSend(false);
    // Thay đổi title
    setSendAccountTitle('Chỉnh Sửa');
    setA('Từ chối');
    setIsEditVisible(true); // Hiển thị nút chỉnh sửa
  };


  return (
    <div id="app-content">
      {showAppAccountSend ? ( // Render AppAccountSend when showAppAccountSend is true
        <AppAccountSend selectedAccount={selectedAccount} onEdit={handleEdit} />
      ) : (
        <div className="multichain-app-header">
          <div className="multichain-app-header__content">
            <Menu />
          </div>
          <div className='main-container-wrapper-send'>
            <div className='page-container'>
              <div className='send-account-header'>
                <div className='send-account-header__title'>{sendAccountTitle}</div>
                <button
                  className='send-account-header__btn'
                  onClick={handleContinue}
                  style={{ display: isEditVisible ? 'block' : 'none' }}
                >
                  Hủy chỉnh sửa
                </button>
              </div>
              <div className='send-account-row'>
                <div className='send-account-row__input'>
                  <div className='send-account-row__input-select'>
                    <p className='input-select__name'>{selectedAccount.name}</p>
                    <p className='input-select__address'>{selectedAccount.address}</p>
                  </div>
                  <button onClick={goBackToAppSend}>
                    <img
                      src={closeimg}
                      alt="img"
                      style={{
                        width: "16px",
                        height: "16px",
                        verticalAlign: "middle"
                      }}
                    ></img>
                  </button>
                </div>
              </div>
              <div className='send-account-content'>
                <div className='send-v2__from'>
                  <div className='send-v2__from-row'>
                    <div className='send-v2__from-label'>Tài sản:</div>
                    <div className='send-v2__from-field'>
                      <div class="send-v2__asset-dropdown-top">
                        <div class="send-v2__asset-dropdown-top__icon">
                          <img
                            src={logo}
                            alt=""
                            style={{
                              width: "36px",
                              height: "36px",
                              borderRadius: "50%",
                            }}
                          />
                        </div>
                        <div class="send-v2__asset-dropdown-top__data">
                          <div className='send-v2__asset-dropdown-top__symbol'>ETH</div>
                          <div className='send-v2__asset-dropdown-top__name'>
                            <span className='send-v2__asset-dropdown-top__name__label'>Số dư:</span>
                            <div class="currency-display-component" title="0 ETH">
                              <span>{selectedAccount.balance}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='send-v2__from-row'>
                    <div class="send-v2__form-label">
                      Số tiền:
                      <button class="checkbox-btn">
                        <input type="checkbox" />
                        <div class="checkbox-btn-label">Tối đa</div>
                      </button>
                    </div>
                    <div className='send-v2__from-field'>
                      <div className='send-v2__asset-dropdown-bottom'>
                        <div className='unit-input'>
                          <div className='unit-input__inputs'>
                            <div className="unit-input__input-container">
                              <input
                                type="number"
                                dir="ltr"
                                className="unit-input__input"
                                placeholder="0"
                                value={currencyValue}
                                onChange={(e) => setCurrencyValue(e.target.value)}
                              />
                              <div className="unit-input__suffix">
                                {/* {isEthToUsd ? "USD" : "ETH"} */}
                                tBNB
                              </div>
                            </div>
                            <div className="currency-display-component" title="0 ETH">
                              <span className="currency-display-component__prefix"></span>
                              <span className="currency-display-component__text">
                                {/* {isEthToUsd ? currencyValue : (currencyValue * 0.00).toFixed(2)} */}
                              </span>
                              <span className="currency-display-component__suffix">
                                {/* {isEthToUsd ? "ETH" : "USD"} */}
                                Không có sẵn tỷ lệ quy đổi nào
                              </span>
                            </div>
                          </div>
                          <button class="currency-input__swap-component" onClick={handleSwapCurrency}>
                            <img
                              src={retweet}
                              alt=""
                              style={{
                                width: "23px",
                                height: "18px",
                                verticalAlign: "middle"
                              }}
                            ></img>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='transaction-detail'>
                    <div className="transaction-detail-item">
                      <div className='transaction-detail-item__row'>
                        <div className='transaction-detail-item__detail-title'>
                          <h6>
                            <div className='gas-details-item-title'>Phí gas</div>
                            <span className='gas-details-item-title__estimate' style={{marginTop:"2px"}}>(ước tính)</span>
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
                        </div>
                        <div className='transaction-detail-item__detail-values'>
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
                          <h6>Có khả năng sau &lt; 30 giây</h6>
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
                  </div>
                </div>
              </div>
              <div className='send-account-footer'>
                <footer>
                  <button onClick={handleClose} className='btn-footer-close'>{sendA}</button>
                  <button onClick={handleContinue} className='btn-footer-continue'>Tiếp theo</button>
                </footer>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AppAccount;
