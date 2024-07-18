"use client";

import Image from 'next/image';
import { Anchor } from 'antd';
import { languageSelect, navbarAnchor } from '@/utils/staticVariables';
import { esportsLogo } from "@/assets/logos";
import EarthIcon from "@/assets/icons/earth.png";
import { useAppDispatch, useAppSelector, useAppStore } from '@/lib/hooks';
import { onChange } from '@/lib/features/languageSlice';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { useState } from 'react';
import "./Navbar.scss";
import { Select } from '..';
import ILang from '@/types/ILang';
import IOption from '@/types/IOption';

const Navbar = () => {
    const dispatch = useAppDispatch();
    const activeLang = useAppSelector(state => state.languageSlice);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='fixed-container'>
            <nav className='nav page__nav pd-h'>
                <picture>
                    <Image
                        className='logo'
                        src={esportsLogo}
                        alt="esports logo image"
                    />
                </picture>

                <div className='nav__anchors'>
                    <Anchor
                        direction="horizontal"
                        items={navbarAnchor}
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
            </nav>
        </div>
    )
}

export default Navbar;
