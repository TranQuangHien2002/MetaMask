import React, { useState } from 'react';
import ListMenuNetwork from './ListMenuNetwork';
import './MenuPicker.css';

import close from '../images/icons/close.svg';
import logoETH from '../images/logo/eth_logo.png';
import logoLM from '../images/logo/linea-logo-mainnet.png';
import logoG from '../images/logo/logoD.png'
import logoS from '../images/logo/logoG.png'
import logoLT from '../images/logo/linea-logo-testnet.png'


function MenuPicker({ onClose, onSelectNetwork }) {
  const [activeNetwork, setActiveNetwork] = useState('Ethereum Mainnet');
  const [showNewFrame, setShowNewFrame] = useState(false);

  const handleNetworkClick = (networkName, networkImg) => {
    setActiveNetwork(networkName);
    onSelectNetwork(networkName, networkImg);
  };

  const handleToggleClick = () => {
    setShowNewFrame(!showNewFrame);
  };

  return (
    <div className='popover-wrap__picker'>
      <div className='popover-header__picker'>
        <h2>Select a network</h2>
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
      <div className='popover-content__picker'>
        <div className='picker-list-menu'>
          <ListMenuNetwork
            networkName='Ethereum Mainnet'
            networkImg={logoETH} 
            activeNetwork={activeNetwork}
            onClick={handleNetworkClick}
          />
          <ListMenuNetwork
            networkName='Linea Mainnet'
            networkImg={logoLM}
            activeNetwork={activeNetwork}
            onClick={handleNetworkClick}
          />
          {showNewFrame ? (
            <div className="scrollable-networks">
              <ListMenuNetwork
                networkName='Goerli'
                networkImg={logoG}
                activeNetwork={activeNetwork}
                onClick={handleNetworkClick}
              />
              <ListMenuNetwork
                networkName='Sepolia'
                networkImg={logoS}
                activeNetwork={activeNetwork}
                onClick={handleNetworkClick}
              />
              <ListMenuNetwork
                networkName='Linea Goerli'
                networkImg={logoLT}
                activeNetwork={activeNetwork}
                onClick={handleNetworkClick}
              />
              {/* Add more networks here */}
            </div>
          ) : null}
        </div>
        <div className='picker-toggle-witch'>
          <p>Hiển thị các mạng thử nghiệm</p>
          <label className='switch'>
            <input type='checkbox' checked={showNewFrame} onChange={handleToggleClick}></input>
            <span className='slider round'></span>
          </label>
        </div>
        <div className='picker-button-link'>
          <button>Thêm mạng</button>
        </div>
      </div>
    </div>
  );
}

export default MenuPicker;

