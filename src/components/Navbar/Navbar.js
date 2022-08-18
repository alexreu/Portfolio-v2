import React, { useEffect, useState, useContext } from "react";
import Image from "next/image";
import { ThemeContext } from "../../modules/theme";
import styles from "./Navbar.module.css";
import { BurgerButton } from "../BurgerButton";
import { Button } from "../Button";
import { MenuItem } from "../MenuItem";

const navContent = [
    { label: "Accueil", anchor: "home" },
    { label: "A propos", anchor: "about" },
    { label: "Services", anchor: "services" },
    { label: "Réalisations", anchor: "portfolio" },
];

export const Navbar = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const [scroll, setScroll] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [underlineItem, setUnderlineItem] = useState(null);
    const [colorTheme, setColorTheme] = useState("dark");

    useEffect(() => {
        setColorTheme(theme);
        const onScroll = () => {
            const scrollCheck = window.scrollY > 120;
            const visibleSection = navContent.find(section => {
                const bounding = document.querySelector(`section#${section.anchor}`).getClientRects();
                const [{ bottom }] = bounding;
                if (bottom >= 64) {
                    return section;
                }
            });
            setUnderlineItem(visibleSection.anchor);

            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        };

        const onWindowResize = () => {
            if (window.innerWidth >= 1024) {
                setOpenMenu(false);
            }
        };

        document.addEventListener("scroll", onScroll);
        window.addEventListener("resize", onWindowResize);

        return () => {
            document.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onWindowResize);
        };
    }, [scroll, openMenu, underlineItem]);

    const handleToggleMenu = () => {
        setOpenMenu(!openMenu);
        document.body.classList.toggle("fixed");
        document.body.classList.toggle("w-screen");
    };

    const navList = navContent.map(navItem => {
        const { anchor, label } = navItem;
        return (
            <MenuItem
                anchor={anchor}
                label={label}
                scroll={scroll}
                key={anchor}
                isUnderline={anchor !== "home" && anchor === underlineItem}
            />
        );
    });

    const toggleTheme = () => {
        setColorTheme(theme === "light" ? "dark" : "light");
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <header
            role="banner"
            className={`${
                scroll
                    ? `${styles.headerSticky} fixed top-0 bg-white dark:bg-primary-darkest shadow-lg`
                    : "absolute top-0 bg-transparent"
            } flex items-center justify-between z-[9999] w-full min-h-[64px] px-8 lg:px-16 transition-all duration-300 ease-in-out`}
        >
            <a href="#home" className="inline-flex items-center">
                <Image
                    src={
                        scroll && colorTheme === "light" ? "/images/logo-text-dark.png" : "/images/logo-text-white.png"
                    }
                    alt="logo"
                    width={scroll ? "120px " : "140px"}
                    height={scroll ? "60px " : "80px"}
                />
                <span className="sr-only">retour en haut de la page</span>
            </a>
            <BurgerButton onClick={handleToggleMenu} style={scroll ? "text-black dark:text-white" : "text-white"} />
            <nav
                role="navigation"
                aria-label="navigation-principal"
                className={`${openMenu ? "lgd:w-screen lgd:translate-x-0" : "lgd:w-0 lgd:-translate-x-full"} ${
                    styles.mobilePopUp
                }`}
            >
                <ul className="flex lgd:flex-col lg:justify-end items-stretch lgd:gap-y-3 lg:gap-x-16 lgd:overflow-hidden lgd:bg-white lgd:dark:bg-primary-darkest lg:min-h-[64px] lgd:px-4 text-[22px] transition-200">
                    <li className="lg:hidden">
                        <Button
                            type="button"
                            style="flex items-center justify-center lg:hidden ml-auto"
                            onClick={handleToggleMenu}
                        >
                            <i className="bi bi-x text-[35px] dark:text-white" />
                        </Button>
                    </li>
                    {navList}
                    <li className="inline-flex items-center">
                        <Button
                            onClick={toggleTheme}
                            type="button"
                            style={`${
                                scroll ? "text-black dark:text-white" : "text-black lgd:dark:text-white lg:text-white"
                            } inline-flex items-center justify-center h-10 w-10 bg-transparent rounded-full transition-200 hover:cursor-pointer hover:bg-[#9aa0a6]/[.157]`}
                        >
                            <i
                                className={`bi-${
                                    colorTheme === "dark" ? "sun" : "moon-stars"
                                } font-medium text-lg transition-200`}
                            />
                            <span className="sr-only">
                                {colorTheme === "dark" ? "passer au theme clair" : "passer au theme fonce"}
                            </span>
                        </Button>
                    </li>
                    <li className="inline-flex items-center">
                        <a
                            href="#contact"
                            className={`btn btn-default ${
                                scroll
                                    ? "text-grey-dark dark:text-white border-grey-light hover:text-white"
                                    : "text-grey-dark dark:text-white lg:text-white border-grey-light lg:border-[hsla(0,0%,100%,.2)]"
                            }`}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
