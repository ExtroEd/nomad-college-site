import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
    return (
        <header className={"header"}>
            <div className="container">
                <div className="header__nav">
                    <h1 className={"header__logo"}>
                        <img src="https://nomad.iuk.kg/wp-content/uploads/2022/07/cropped-NC_logo.png" alt="Logo" />
                    </h1>
                    <ul className={"header__menu"}>
                        <li className={"header__menu-item"}>
                            <NavLink to={"/about"}>
                                О нас
                            </NavLink>
                        </li>
                        <li className={"header__menu-item"}>
                            <NavLink to={"/"}>
                                Направления
                            </NavLink>
                        </li>
                        <li className={"header__menu-item"}>
                            <NavLink to={"/"}>
                                Цены
                            </NavLink>
                        </li>
                        <li className={"header__menu-item"}>
                            <NavLink to={"/"}>
                                Список студентов
                            </NavLink>
                        </li>
                        <li className={"header__menu-item"}>
                            <NavLink to={"/contact"}>
                                Контакты
                            </NavLink>
                        </li>
                        <li className={"header__menu-item"}>
                            <FaInstagram />
                        </li>
                        <li className={"header__menu-item"}>
                            <FaTelegram />
                        </li>
                        <li className={"header__menu-item"}>
                            <FaWhatsapp />
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;