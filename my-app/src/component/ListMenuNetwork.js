// ListMenuNetwork.js
import React from 'react';

function ListMenuNetwork({ network, activeNetwork, onClick }) {
  const handleClick = () => {
    onClick(network.networkName, network.networkImg);
  };

  return (
    <div
      className={`picker-list-menu-item ${activeNetwork === network.networkName ? 'selected' : ''}`}
      onClick={handleClick}
    >
      <div className='picker-list-menu-item__network-avatar'>
        <img
          src={network.networkImg}
          alt={network.networkName}
          style={{
            width: "30px",
            height: "30px",
          }}
        />
      </div>
      <div className='picker-list-menu-item__network-name'>
        <button>{network.networkName}</button>
      </div>
    </div>
  );
}

export default ListMenuNetwork;
