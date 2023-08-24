// ListAccount.js
import React from 'react';
import more from '../images/icons/more-vertical.svg';
import './MenuAvatar1';

function ListAccount({ account, activeAccount, onClick }) {
  const handleClick = () => {
    onClick(account);
  };

  return (
    <div
      className={`popover-list ${activeAccount.id === account.id ? 'selected' : ''}`}
      onClick={handleClick}
    >  
      <div className='list-item__avatar' >
        <span dangerouslySetInnerHTML={{ __html: account.img }} />
      </div>
      <div className='list-item__content'>
        <div className='content-top'>
          <div className='account-display-component'>
            <span>{account.name}</span>
          </div>
          <div className='currency-display-component' title={`$0.00 ${account.currency}`}>
            <span className='currency-display-component__prefix'></span>
            <span className='currency-display-component__text'>$0.00</span>
            <span className='currency-display-component__currency'>{account.currency}</span>
          </div>
        </div>
        <div className='content-bottom'>
          <div className='code-display-component'>
            <p>{account.address}</p>
          </div>
          <div className='currency-display-component' title={account.balance}>
            <span className='currency-display-component__prefix'></span>
            <span className='currency-display-component__text'>{account.balance}</span>
            <span className='currency-display-component__text'></span>
          </div>
        </div>
      </div>
      <div className='list-item__button'>
        <button>
          <img
            src={more}
            alt=''
            style={{
              width: '15px',
              height: '15px',
            }}
          />
        </button>
      </div>
    </div>
  );
}

export default ListAccount;
