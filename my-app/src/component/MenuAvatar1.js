import React from 'react';
import close from '../images/icons/close.svg';
import './MenuAvatar.css';
import TokenLink from './TokenLink';

import add from '../images/icons/add.svg';
import ipr from '../images/icons/import.svg';
import hardware from '../images/icons/hardware.svg';
import ListAccount from './ListAccount';
import accountData from './accountData'; // Import the account data from the file


function MenuAvatar1({ onClose, onSelectAccount, onAddAccountClick }) {
    const [activeAccount, setActiveAccount] = React.useState(accountData[0]);

    const handleAccountClick = (account) => {
        setActiveAccount(account);
        onSelectAccount(account.name, account.img);
    };

    const handleAddAccountClick = () => {
        onAddAccountClick(); // Call the onAddAccountClick prop to handle the parent state
    };
    return (
        <div className="popover-wrap">
            <div className='popover-header'>
                <h2>Chọn một tài khoản</h2>
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
            <div className='popover-content'>
                <div className='popover-content__box'>
                    <div className='popover-item'>
                        {accountData.map((account) => (
                            <ListAccount
                                key={account.id}
                                account={account}
                                activeAccount={activeAccount}
                                onClick={handleAccountClick}
                            />
                        ))}
                    </div>
                    <div className='popover-link'>
                        <TokenLink
                            img1={add}
                            name1='Add account'
                            img2={ipr}
                            name2='Nhập tài khoản'
                            img3={hardware}
                            name3='Hardware wallet'
                            href='chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/home.html#new-account/connect'
                            onAddAccountClick={handleAddAccountClick}
                        ></TokenLink>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default MenuAvatar1;
