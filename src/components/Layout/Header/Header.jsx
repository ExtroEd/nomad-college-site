import React from 'react';

const Header = () => {
    return (
        <header className={"header"}>
            <div className="container">
                <div className="header__nav">
                    <h1 className={"header__logo"}>

                    </h1>
                    <ul className={"header__menu"}>
                        <li className={"header__menu-item"}>
                            О нас
                        </li>
                        <li className={"header__menu-item"}>
                            Направления
                        </li>
                        <li className={"header__menu-item"}>
                            Цены
                        </li>
                        <li className={"header__menu-item"}>
                            Как поступить
                        </li>
                        <li className={"header__menu-item"}>
                            Контакты
                        </li>
                        <li className={"header__menu-item"}>
                            о нас
                        </li>
                        <li className={"header__menu-item"}>
                            о нас
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;