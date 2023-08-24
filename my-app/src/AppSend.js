import React, { useState } from 'react';
import './App.css';
import './AppSend.css';
import Headerr from './component/Headerr';
import Menu from './component/Menu';
import scan from './images/icons/scan.svg';
import accountData from './component/accountData';
import AppAccount from './AppAccount';
function AppSend({ onCancelSend }) {
  const [activeAccount, setActiveAccount] = useState(accountData[0]);
  const [showAppAccount, setShowAppAccount] = useState(false);

  const goBackToAppSend = () => {
    setShowAppAccount(false);
  };
  const handleCancelSend = () => {
    setShowAppAccount(false);
    onCancelSend(); // Gọi hàm để đóng trang AppSend ở tầng cao hơn
  };
  return (
    <div id="app-content">
      <Headerr />
      {showAppAccount ? null : (
        <div className="multichain-app-header">
          <div className="multichain-app-header__content">
            <Menu />
          </div>
          <div className='main-container-wrapper-send'>
            <div className='page-container'>
              <div className='send-header'>
                <div className='send-header__title'>Gửi đến</div>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className='send-header__close' onClick={onCancelSend}>Hủy</a>
              </div>
              <div className='send-row'>
                <div className='input__wrapper'>
                  <input className='input__wrapper__input' placeholder="Tìm kiếm, địa chỉ công khai (0x) hoặc ENS"></input>
                  <button className='input__wrapper__btn'>
                    <img src={scan} alt='' style={{
                      width: "24px",
                      height: "24px",
                      verticalAlign: "middle"
                    }}></img>
                  </button>
                </div>
              </div>
              <div className='send-selected'>
                <div className='send-selected__title'>
                  <p>Your accounts</p>
                </div>
                <div className='send-selected__wrapper'>
                  {accountData.map((account) => (
                    <div key={account.id}>
                      <div
                        className={`popover-list ${activeAccount.id === account.id ? 'selected' : ''}`}
                        onClick={() => {
                          setActiveAccount(account);
                          setShowAppAccount(true);
                        }}
                      >
                        <div className='list-item__avatar'>
                          <span dangerouslySetInnerHTML={{ __html: account.img }} />
                        </div>
                        <div className='list-item__content'>
                          <div className='content-top'>
                            <div className='account-display-component'>
                              <span>{account.name}</span>
                            </div>
                          </div>
                          <div className='content-bottom'>
                            <div className='code-display-component'>
                              <p>{account.address}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showAppAccount && (
        <AppAccount
          close={handleCancelSend}
          goBackToAppSend={goBackToAppSend}
          selectedAccount={activeAccount}
        />
      )}
    </div>
  );
}

export default AppSend;