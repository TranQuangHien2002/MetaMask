import React from 'react';

function ListMenuNetwork({ networkName, networkImg, activeNetwork, onClick }) {
  const handleClick = () => {
    onClick(networkName, networkImg);
  };

  return (
    <div
      className={`picker-list-menu-item ${activeNetwork === networkName ? 'selected' : ''}`}
      onClick={handleClick}
    >
      <div className='picker-list-menu-item__network-avatar'>
        <img
          src={networkImg}
          alt={networkName}
          style={{
            width: "30px",
            height: "30px",
          }}
        />
      </div>
      <div className='picker-list-menu-item__network-name'>
        <button>{networkName}</button>
      </div>
    </div>
  );
}

export default ListMenuNetwork;
