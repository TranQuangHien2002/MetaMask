import React from 'react'
import TokenLink from './TokenLink';
import TokenList from './TokenList';

import add from '../images/icons/add.png'
import refresh from '../images/icons/refresh.svg'
import message from '../images/icons/message-question.png'
function TabToken() {
    return (
        <div className="content-token">
            <TokenList></TokenList>
            <TokenLink
                img1={add}
                name1="Nhập token"
                img2={refresh}
                name2="Làm mới danh sách"
                img3={message}
                name3="Hỗ trợ về MetaMask"
                href="https://support.metamask.io/hc/vi"
            ></TokenLink>
        </div>
    )
}

export default TabToken