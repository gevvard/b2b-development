import React, {useState} from 'react';
import css from "./header.module.scss"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className={css.headerContainer}>
      <ul className={css.logoContainer}>
        <img
          src={
            'https://cdn-ru.bitrix24.ru/b6881111/landing/448/448384c7d3b3eaf88a5d4fc3fa4eb66b/B2B_logo_1x.jpg'
          }
          alt='logo'
        />
      </ul>
      <button className={`${css.hamburger} ${isMenuOpen ? "open" : ""}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </button>

        <ul className={`${css.menuItems} ${isMenuOpen ? "" : css.closed}`}>
          <li>BITRIX24</li>
          <li>ԼԻՑԵՆԶԻԱ</li>
          <li>ՄԱՍՆԱԳԻՏԱՑՈՒՄ</li>
          <li>ԱՌԱՎԵԼՈՒԹՅՈՒՆՆԵՐ</li>
          <li>ՓՈՒԼԵՐ</li>
          <li>ԿԱՊ ՄԵԶ ՀԵՏ</li>
          <li>ENG</li>
          <li>PY</li>
        </ul>
    </div>
  );
};

export default Header;