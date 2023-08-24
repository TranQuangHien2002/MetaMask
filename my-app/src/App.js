import './App.css';
import React, { useState } from 'react';

import Headerr from './component/Headerr';
import Menu from './component/Menu';

import WalletOverviewBalance from './component/WalletOverviewBalance';
import WalletOverviewButton from './component/WalletOverviewButton';

import TabList from './component/TabList';

import AppSend from './AppSend'; // Import trang AppSend


function App() {
  const [showAppSend, setShowAppSend] = useState(false);

  const handleSendClick = () => {
    setShowAppSend(true);
  };
  const handleCancelSend = () => {
    setShowAppSend(false); // Quay lại trang App
  };
  if (showAppSend) {
    return <AppSend onCancelSend={handleCancelSend}/>;
  }
  
  return (
    <div id="app-content">
      <Headerr></Headerr>

      <div className="multichain-app-header">
        <div className="multichain-app-header__content">
          <Menu></Menu>
        </div>

        <div className="main-container-wrapper">
          <div className="home__main-view">

            <div className="home__balance-wapper">
              <div className="wallet-overview">
                <WalletOverviewBalance></WalletOverviewBalance>
                <WalletOverviewButton  onSendClick={handleSendClick}/>
              </div>
            </div>

            <div className="mm-box">
              <div className="box-tabs">
                <TabList></TabList>
              </div>
            </div>

          </div>
        </div>

      </div>
      
    </div>
  );
}

export default App;
