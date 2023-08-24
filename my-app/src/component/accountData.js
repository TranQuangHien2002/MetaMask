// accountData.js
import "./MenuAvatar.css"

export const generateRandomColor = () => {
    const colors = ['#188CF2', '#FA8500', '#F5D400'];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  
export const generateRandomSVG = (color1, color2, color3) => {
    const randomSVG = `
      <svg x="0" y="0" width="16" height="16"> 
        <rect x="0" y="0" width="16" height="16" transform="translate(-0.23089400121079215 4.012750031472015) rotate(165.4 8 8)" fill="${color1}"></rect>
        <rect x="0" y="0" width="16" height="16" transform="translate(0.15026451180710063 -6.302670465269929) rotate(344.7 8 8)" fill="${color2}"></rect>
        <rect x="0" y="0" width="16" height="16" transform="translate(7.064173132965704 10.241027787744542) rotate(213.3 8 8)" fill="${color3}"></rect>
      </svg>
    `;
    return randomSVG;
  };
  
  const accountData = [
    {
      id: 1,
      name: 'Account 1',
      img: generateRandomSVG(generateRandomColor(), generateRandomColor(), generateRandomColor()),
      currency: 'USD',
      address: '0xf52777a60b',
      balance: '100 ETH',
    },
  ];
  
  export default accountData;
  