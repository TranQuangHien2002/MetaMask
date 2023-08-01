import React from 'react'

import copy from '../images/icons/copy.svg'

function WalletOverviewBalance() {
    return (
        <div className="wallet-overview__balance">
            <div className="wallet-button">
                <button className="button-overview">0xf52...a60B
                    <img
                        src={copy}
                        alt=""
                        style={{
                            width: "15px",
                            height: "15px",
                            marginLeft: "5px",
                            filter: 'invert(40%)'
                        }}
                    ></img>
                </button>
            </div>
            <div className="eth-overview__balance">
                <div className="eth-overview__primary-container">
                    <span class="currency-display-component__prefix"></span>
                    <span class="currency-display-component__text">0</span>
                    <span class="currency-display-component__suffix">ETH</span>
                </div>
                <div className="eth-overview__secondary-balance">
                    <span class="currency-display-component__prefix"></span>
                    <span class="currency-display-component__text">$0.00</span>
                    <span class="currency-display-component__suffix">USD</span>
                </div>
            </div>
        </div>
    )
}

export default WalletOverviewBalance