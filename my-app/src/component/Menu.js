import React, { useState } from 'react';
import './Menu.css'

import logo2 from '../images/logo/eth_logo.png';
import arow from '../images/icons/arrow-down.svg';
import more from '../images/icons/more-vertical.svg'


import './MenuAvatar'
import './MenuPicker'
import MenuPicker from './MenuPicker';
import MenuAvatar from './MenuAvatar';

import './MenuItem'
import MenuItem from './MenuItem';

function Menu() {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);

    const [selectedNetwork, setSelectedNetwork] = useState("Ethereum Mainnet");
    const [selectedNetworkImg, setSelectedNetworkImg] = useState(logo2); // New state for the selected network image

    const handleSelectNetwork = (networkName, networkImg) => {
        setSelectedNetwork(networkName);
        setSelectedNetworkImg(networkImg); // Update the selected network image
    };

    const handleCloseModal = () => {
        setShowModal1(false);
        setShowModal2(false);
        setShowModal3(false);
    };
    const handleBtn1Click = () => {
        setShowModal1(!showModal1);
        setShowModal2(false);
        setShowModal3(false);
    };

    const handleBtn2Click = () => {
        setShowModal1(false);
        setShowModal2(!showModal2);
        setShowModal3(false);
    };

    const handleBtn3Click = () => {
        setShowModal1(false);
        setShowModal2(false);
        setShowModal3(!showModal3);
    };

    // Thêm sự kiện onClick để ngăn sự kiện lan ra ngoài (e.stopPropagation())
    const handleModalClick = (e) => {
        e.stopPropagation();
    };
    const handleOutsideClick = () => {
        setShowModal1(false);
        setShowModal2(false);
        setShowModal3(false);
    };


    return (
        <div className={`menu ${showModal1 || showModal2 || showModal3 ? 'show-modal' : ''}`}>
            <div className="button button-picker" onClick={handleBtn1Click}>
                <img
                    src={selectedNetworkImg} // Use the selected network image
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
                <svg x="0" y="0" width="16" height="16" style={{ borderRadius: "50%", marginRight: "8px" }}>
                    <rect x="0" y="0" width="16" height="16" transform="translate(-0.23089400121079215 4.012750031472015) rotate(165.4 8 8)" fill="#188CF2"></rect>
                    <rect x="0" y="0" width="16" height="16" transform="translate(0.15026451180710063 -6.302670465269929) rotate(344.7 8 8)" fill="#FA8500"></rect>
                    <rect x="0" y="0" width="16" height="16" transform="translate(7.064173132965704 10.241027787744542) rotate(213.3 8 8)" fill="#F5D400"></rect>
                </svg>
                <p>Account 1</p>
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
                        {/* Pass the handleSelectNetwork callback to MenuPicker */}
                        <MenuPicker onClose={handleCloseModal} onSelectNetwork={handleSelectNetwork} />
                    </div>
                </div>
            )}

            {showModal2 && (
                <div className="modal-overlay show-modal" onClick={handleOutsideClick}>
                    <div className="modal-content" onClick={handleModalClick}>
                        <MenuAvatar onClose={handleCloseModal} /> {/* Pass the onClose prop */}
                    </div>
                </div>
            )}

        </div>
    )
}

export default Menu