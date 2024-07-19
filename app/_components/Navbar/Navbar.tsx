"use client";

import Image from 'next/image';
import { Anchor } from 'antd';
import { languageSelect } from '@/utils/staticVariables';
import { esportsLogo } from "@/assets/logos";
import EarthIcon from "@/assets/icons/earth.png";
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { onChange } from '@/lib/features/languageSlice';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { useState } from 'react';
import "./Navbar.scss";
import { Select } from '..';
import ILang from '@/types/ILang';
import IOption from '@/types/IOption';
import translations from '@/locales/translations';
import NavDrawerBtn from './NavDrawerBtn';

const Navbar = ({ showMenuBtn = true, className, anchorDirection = "horizontal", onClickAnchor = () => { } }: {
    showMenuBtn?: boolean,
    className?: string,
    anchorDirection?: "horizontal" | "vertical",
    onClickAnchor?: () => void,
}) => {
    const dispatch = useAppDispatch();
    const activeLang = useAppSelector(state => state.languageSlice);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={`nav pd-h ${className}`}>
            <picture>
                <Image
                    className='logo'
                    src={esportsLogo}
                    alt="esports logo image"
                />
            </picture>

            <div className='nav__anchors'>
                <Anchor
                    direction={anchorDirection}
                    items={translations[activeLang.value].Navbar.anchors}
                    onClick={onClickAnchor}
                />
            </div>

            <Select
                className="language-select"
                onChange={(selected) => { dispatch(onChange(selected as ILang)) }}
                value={activeLang}
                filterSort={(el: IOption) => el.value !== activeLang.value}
                options={languageSelect}
                controlOpen={[isOpen, setIsOpen]}
                suffixIcon={isOpen
                    ? <UpOutlined />
                    : <DownOutlined />
                }
                prefixIcon={
                    <Image
                        src={EarthIcon}
                        alt='Earth icon image'
                        className='select__icon'
                    />
                }
            />

            {showMenuBtn && <NavDrawerBtn />}
        </nav>
    )
}

export default Navbar;
