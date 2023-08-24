import React, { useState } from 'react';
import './Menu.css';

import logo2 from '../images/logo/eth_logo.png';
import arow from '../images/icons/arrow-down.svg';
import more from '../images/icons/more-vertical.svg';
import close from '../images/icons/close.svg';
import arrowL from '..//images/icons/arrow-left.svg'

import MenuPicker from './MenuPicker';
import MenuAvatar from './MenuAvatar1';
import MenuItem from './MenuItem';

import accountData, { generateRandomColor, generateRandomSVG } from './accountData';

function Menu({ onSelectAccount }) {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    const [showNewModal, setShowNewModal] = useState(false);

    const [selectedNetwork, setSelectedNetwork] = useState("Ethereum Mainnet");
    const [selectedNetworkImg, setSelectedNetworkImg] = useState(logo2);

    const [selectedAccount, setSelectedAccount] = useState("Account 1");
    const [selectedAccountImg, setSelectedAccountImg] = useState(logo2);

     // Step 1: Add a new state to track the input value
    const [inputValue, setInputValue] = useState('');
    
    
    const handleSelectNetwork = (networkName, networkImg) => {
        setSelectedNetwork(networkName);
        setSelectedNetworkImg(networkImg);
    };

    const handleSelectAccount = (accountName, accountImg) => {
        setSelectedAccount(accountName);
        setSelectedAccountImg(accountImg);
    };
    

    const handleCloseModal = () => {
        setShowModal1(false);
        setShowModal2(false);
        setShowModal3(false);
        setShowNewModal(false);
    };

    const handleBtn1Click = () => {
        setShowModal1(!showModal1);
        setShowModal2(false);
        setShowModal3(false);
        setShowNewModal(false);
    };

    const handleBtn2Click = () => {
        setShowModal1(false);
        setShowModal2(!showModal2);
        setShowModal3(false);
        setShowNewModal(false);
    };

    const handleBtn3Click = () => {
        setShowModal1(false);
        setShowModal2(false);
        setShowModal3(!showModal3);
        setShowNewModal(false);
    };

    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    const handleOutsideClick = () => {
        setShowModal1(false);
        setShowModal2(false);
        setShowModal3(false);
        setShowNewModal(false);
    };

    const handleAddAccountClick = () => {
        setShowModal2(false);
        setShowNewModal(true);
    };

    const handleNewModalClose = () => {
        setShowNewModal(false);
    };

    // Step 2: Add a helper function to check if the input is empty
    const isInputEmpty = () => {
        return inputValue.trim() === '';
    };

    const handleAddAccount = () => {
        if (!isInputEmpty()) {
            const newAccount = {
                id: accountData.length + 1,
                name: inputValue,
                img: generateRandomSVG(generateRandomColor(), generateRandomColor(), generateRandomColor()),
                currency: 'USD',
                address: '0x' + Math.random().toString(16).substr(2, 10), // Generate a random address
                balance: '0 ETH',
            };

            // Update the state with the new account
            accountData.push(newAccount);

            // Close the modal and reset the input value
            handleNewModalClose();
            setInputValue('');
        }
    };
    return (
        <div className={`menu ${showModal1 || showModal2 || showModal3 || showNewModal ? 'show-modal' : ''}`}>
            <div className="button button-picker" onClick={handleBtn1Click}>
                <img
                    src={selectedNetworkImg}
                    alt=""
                    className="btn-header-logo"
                    style={{
                        width: "15px",
                        height: "15px",
                        borderRadius: "50%",
                        margin: "0px 10px"
                    }}
                ></img>
                <p>{selectedNetwork}</p>
                <img
                    src={arow}
                    alt=""
                    style={{
                        margin: "5px",
                        width: "15px",
                        height: "15px",
                        color: "red"
                    }}
                ></img>
            </div>
            <div className="button button-avatar" onClick={handleBtn2Click}>
            <img
                    src={selectedAccountImg} 
                    alt="img"
                    className="btn-header-logo"
                    style={{
                        width: "15px",
                        height: "15px",
                        borderRadius: "50%",
                        margin: "0px 10px"
                    }}
                ></img>
                <p>{selectedAccount}</p>
                <img
                    src={arow}
                    alt=""
                    style={{
                        margin: "5px",
                        width: "15px",
                        height: "15px",
                    }}
                ></img>
            </div>
            <div className="button button-icon" onClick={handleBtn3Click}>
                <img
                    src={more}
                    alt=""
                    style={{
                        width: "15px",
                        height: "15px",
                    }}
                ></img>
                {showModal3 && (
                    <div className="menu-capsule" onClick={handleCloseModal}>
                        <MenuItem></MenuItem>
                    </div>
                )}
            </div>

            {showModal1 && (
                <div className="modal-overlay show-modal" onClick={handleOutsideClick}>
                    <div className="modal-content" onClick={handleModalClick}>
                        <MenuPicker onClose={handleCloseModal} onSelectNetwork={handleSelectNetwork} />
                    </div>
                </div>
            )}

            {showModal2 && (
                <div className="modal-overlay show-modal" onClick={handleOutsideClick}>
                    <div className="modal-content" onClick={handleModalClick}>
                        <MenuAvatar onClose={handleCloseModal} onSelectAccount={handleSelectAccount} onAddAccountClick={handleAddAccountClick} />
                    </div>
                </div>
            )}

            {showNewModal && (
                <div className="modal-overlay show-modal" onClick={handleOutsideClick}>
                    <div className="modal-content" onClick={handleModalClick}>
                        <div className='popoper-box'>
                            <div className='popoper-header'>
                                <div className='popoper-header__title'>
                                    <button onClick={handleBtn2Click} className='rollback'>
                                        <img
                                            src={arrowL}
                                            alt=""
                                            style={{
                                                width: "15px",
                                                height: "15px",
                                            }}
                                        ></img>
                                    </button>
                                    <h2>Add account</h2>
                                    <button onClick={handleNewModalClose} className='close'>
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
                            </div>
                            <div className='popoper-content'>
                                <form>
                                    <div className='popoper-content__add'>
                                        <label>Tên tài khoản</label>
                                        <input
                                            placeholder="Tài khoản.."
                                            type="text"
                                            value={inputValue}
                                            onChange={(e) => setInputValue(e.target.value)}
                                        />
                                        {/* Step 3: Show "Bắt buộc" if the input is empty */}
                                        {isInputEmpty() && <p style={{ color: 'red', margin: '10px 0',fontSize:'12px'}}>Bắt buộc</p>}
                                    </div>
                                    <div className='popoper-content__btn'>
                                        <button onClick={handleBtn2Click} className='cancel'>Hủy</button>
                                        <button onClick={handleAddAccount} className='add'>Tạo</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Menu;
