import React, { useState } from 'react';
import ListMenuNetwork from './ListMenuNetwork';
import './MenuPicker.css';
import NetworkData from './NetworkData'; 

import close from '../images/icons/close.svg';

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

  const visibleNetworks = NetworkData.slice(0, 3);

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
          />
        </button>
      </div>
      <div className='popover-content__picker'>
        <div className='picker-list-menu'>
          {visibleNetworks.map(network => (
            <ListMenuNetwork
              key={network.id}
              network={network}
              activeNetwork={activeNetwork}
              onClick={handleNetworkClick}
            />
          ))}
          {showNewFrame && (
            <div className="scrollable-networks">
              {NetworkData.slice(3).map(network => (
                <ListMenuNetwork
                  key={network.id}
                  network={network}
                  activeNetwork={activeNetwork}
                  onClick={handleNetworkClick}
                />
              ))}
            </div>
          )}
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
