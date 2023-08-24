import React from 'react';

function TokenLink(props) {
    return (
        <div className="multichain-token-link">
            <div className="multichain-token-link__button-import">
                <button className="import-token-button" onClick={props.onAddAccountClick}>
                    <img
                        src={props.img1}
                        alt=""
                        style={{
                            width: "16px",
                            height: "16px",
                        }}
                    ></img>
                    <span>{props.name1}</span>
                </button>
            </div>
            <div className="multichain-token-link__button-refresh">
                <button className="refresh-list-button">
                    <img
                        src={props.img2}
                        alt=""
                        style={{
                            width: "16px",
                            height: "16px",
                        }}
                    ></img>
                    <span>{props.name2}</span>
                </button>
            </div>
            <div className="multichain-token-link__button-refresh">
                <button className="link-help-button">
                    <img
                        src={props.img3}
                        alt=""
                        style={{
                            width: "16px",
                            height: "16px",
                        }}
                    ></img>
                    <a href={props.href} target="_blank" rel="noreferrer">
                        <span>{props.name3}</span>
                    </a>
                </button>
            </div>
        </div>
    )
}

export default TokenLink;
