"use client";

import "./Header.css";

import Navigation from "../Navigation/Navigation";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "../../images/logo.jpg";
import gear from "../../images/gearIcon.svg";

const authItems = [
    {label: "Войти", href: "/signin"},
    {label: "Регистрация", href: "/signup"},
];

const navItems = [
    {label: "Финансы", href: "/finance"},
    {label: "Планирование", href: "/planning"},
    {label: "Прогнозирование", href: "/prediction"},
];

const settingsItems = [
    {href: "/settings", img: gear, alt: "Настройки", imgClassName: "links__image_gear"},
    {label: "Выйти", href: "/signin"},
];

type Props = {
    loggedIn?: boolean,
    setLoggedIn?: any,
}

export default function Header({loggedIn, setLoggedIn}: Props) {
    const router = useRouter();
    const pathname = usePathname();

    function handleExit() {
        setLoggedIn(false);
        localStorage.removeItem("token");
        router.push("/signin");
    }
    
    return (
        <header className={`header ${!loggedIn ? "header_not-logged-in" : ""}`}>
            <Link className="link header__link" href={loggedIn ? "/" : pathname}><Image src={logo} width={50} height={50}  alt="логотип" className="header__logo" /></Link>
            <Navigation navLinks={navItems} authLinks={authItems} settingsLinks={settingsItems} loggedIn={loggedIn as boolean} handleClick={handleExit}/>
        </header>
    )
}
