import React from 'react'

import logo2 from '../images/logo/eth_logo.png';
function TokenList() {
    return (
        <div className="multichain-token-list-item">
            <a className="multichain-token-list-item__container" href="./component/ETH.js" >
                <div className="token-logo">
                    <img
                        src={logo2}
                        alt=""
                        className="token-logo__big"
                        style={{
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            margin: "0px 10px"
                        }}
                    ></img>
                    <img
                        src={logo2}
                        alt=""
                        className="token-logo__small"
                        style={{
                            width: "15px",
                            height: "15px",
                            borderRadius: "50%",
                            margin: "0px 10px"
                        }}
                    ></img>
                </div>
                <div className="token-content">
                    <div class="token-content__text">
                        <div className='token-content__text-network'>
                            <p>Ethereum</p>
                        </div>
                        <div className='token-content__text-currency'>
                            <p>$0.00 USD</p>
                        </div>
                    </div>
                    <div className="token-content__values">
                        <p>0 ETH</p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default TokenList