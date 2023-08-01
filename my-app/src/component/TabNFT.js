import React from 'react'
import './TabNFT.css'

import info from '../images/icons/info.svg'
import nfts from "..//images/logo/no-nfts.svg"
import TokenLink from './TokenLink'

import add from '../images/icons/add.png'
import setting from '../images/icons/setting.svg'
import message from '../images/icons/message-question.png'

function TabNFT() {
    return (
        <div className="content-ntfs">
            <div className='ntfs-tab__notice'>
                <div className='ntfs-tab__notice__message'>
                    <div className='img-info'>
                        <img
                            src={info}
                            alt=""
                            style={{
                                width: "20px",
                                height: "20px",
                                borderRadius: "50%",
                            }}
                        ></img>
                    </div>
                    <div className='message-info'>
                        <h5>Mới! Phát hiện NFT</h5>
                        <h6>Cho phép MetaMask tự động phát hiện NFT từ OpenSea và hiển thị trên ví MetaMask của bạn.</h6>
                        <a className='ntfs-detection-notice__message__link' role='button' href="./Setting.js">Bật phát hiện NFT trong phần Cài Đặt</a>
                    </div>
                </div>
            </div>
            <div className='ntfs-tab__img'>
                <div className='img-no-ntfs'>
                    <img src={nfts} alt=""></img>
                </div>
                <div className='ntfs-tab__link'>
                    <h4>No NFTs yet</h4>
                    <a href="https://metamask.zendesk.com/hc/en-us/articles/360058238591-NFT-tokens-in-MetaMask-wallet"
                        data-testid="import-nft-button"
                        target="_blank"
                        rel="noop ener noreferrer"
                    >Tìm hiểu thêm</a>
                </div>
            </div>
            <div className='ntfs-tab__buttons'>
                <TokenLink
                    img1={add}
                    name1="Nhập NFT"
                    img2={setting}
                    name2="Bật tự động phát hiện"
                    img3={message}
                    name3="Hỗ trợ về MetaMask"
                ></TokenLink>
            </div>
        </div>
    )
}

export default TabNFT