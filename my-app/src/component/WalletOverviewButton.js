import React from 'react'

import add from '../images/icons/add.svg'
import arrow2 from '../images/icons/arrow-2-up-right.svg'
import swap from '../images/icons/swap-horizontal.svg'
import bridge from '../images/icons/bridge.svg'
import diagram from '../images/icons/diagram.svg'

function WalletOverviewButton({onSendClick}) {
    return (
        <div className="wallet-overview__buttons">
            <button className="icon-button eth-overview__button" >
                <a className="icon-button__circle" href='https://portfolio.metamask.io/buy?metamaskEntry=ext_buy_button&metametricsId=0x90afb201e6e924672d41c88c0cf8a3d9aad2a9bef1ba48a39c1ae2760c980d50' target='_blank' rel="noreferrer">
                    <img
                        src={add}
                        alt=""
                        style={{
                            marginTop: "10px",
                            width: "20px",
                            height: "20px",
                            filter: "invert(100%)"
                        }}
                    ></img>
                    <p>Mua</p>
                </a>
            </button>
            <button className="icon-button eth-overview__button"onClick={onSendClick}>
                <div className="icon-button__circle">
                    <img
                        src={arrow2}
                        alt=""
                        style={{
                            marginTop: "10px",
                            width: "20px",
                            height: "20px",
                            filter: "invert(100%)"
                        }}
                    ></img>
                    <p>Gửi</p>
                </div>
            </button>
            <button className="icon-button eth-overview__button">
                <div className="icon-button__circle">
                    <img
                        src={swap}
                        alt=""
                        style={{
                            marginTop: "10px",
                            width: "20px",
                            height: "20px",
                            filter: "invert(100%)"
                        }}
                    ></img>
                    <p>Hoán đổi</p>
                </div>
            </button>
            <button className="icon-button eth-overview__button">
                <a className="icon-button__circle" href='https://portfolio.metamask.io/bridge?metametricsId=0x90afb201e6e924672d41c88c0cf8a3d9aad2a9bef1ba48a39c1ae2760c980d50' target='_blank' rel="noreferrer">
                    <img
                        src={bridge}
                        alt=""
                        style={{
                            marginTop: "10px",
                            width: "20px",
                            height: "20px",
                            filter: "invert(100%)"
                        }}
                    ></img>
                    <p>Bridge</p>
                </a>
            </button>
            <button className="icon-button eth-overview__button">
                <a className="icon-button__circle" href='https://portfolio.metamask.io/?metamaskEntry=ext_portfolio_button&metametricsId=0x90afb201e6e924672d41c88c0cf8a3d9aad2a9bef1ba48a39c1ae2760c980d50' target='_blank' rel="noreferrer">
                    <img
                        src={diagram}
                        alt=""
                        style={{
                            marginTop: "10px",
                            width: "20px",
                            height: "20px",
                            filter: "invert(100%)"
                        }}
                    ></img>
                    <p>Danh mục đầu tư</p>
                    <div class="tooltip">
                        Danh mục đầu tư
                    </div>
                </a>
            </button>
        </div>
    )
}
export default WalletOverviewButton