import React, { useState } from 'react';
import TabToken from './TabToken';
import TabNFT from './TabNFT';
import TabHoatDong from './TabHoatDong';

const TabList = () => {
  const [activeTab, setActiveTab] = useState('tokens'); // Khởi tạo tab mặc định là 'tokens'

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="box-tabs">
      <ul className="box-tabs__list">
        <li className={`home__tab ${activeTab === 'tokens' ? 'active' : ''}`}>
          <button className="tab-tokens" onClick={() => handleTabClick('tokens')}>
            Tokens
          </button>
        </li>
        <li className={`home__tab ${activeTab === 'nft' ? 'active' : ''}`}>
          <button onClick={() => handleTabClick('nft')}>NFT</button>
        </li>
        <li className={`home__tab ${activeTab === 'activity' ? 'active' : ''}`}>
          <button onClick={() => handleTabClick('activity')}>Hoạt động</button>
        </li>
      </ul>
      <div className="box-tabs__content">
        {/* Hiển thị nội dung tương ứng với tab đang được chọn */}
        {activeTab === 'tokens' && <TabToken></TabToken>}
        {activeTab === 'nft' && <TabNFT></TabNFT>}
        {activeTab === 'activity' && <div><TabHoatDong></TabHoatDong></div>}
      </div>
    </div>
  );
};

export default TabList;
