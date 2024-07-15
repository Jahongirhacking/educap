"use client";

import Image from 'next/image';
import { Anchor, Select } from 'antd';
import { languageSelect, navbarAnchor } from '@/utils/staticVariables';
import "./Navbar.scss";
import EsportsLogo from "@/assets/logos/esports_logo.png";
import EarthIcon from "@/assets/icons/earth.png";
import { useRef } from 'react';
import { useAppDispatch, useAppSelector, useAppStore } from '@/lib/hooks';
import { initialize, onChange } from '@/lib/features/languageSlice';
import { DownOutlined } from '@ant-design/icons';

const Navbar = () => {
    const dispatch = useAppDispatch();
    const activeLang = useAppSelector(state => state.languageSlice);

    return (
        <div className='fixed-container'>
            <nav className='nav page__nav pd-h'>
                <picture>
                    <Image
                        className='logo'
                        src={EsportsLogo}
                        alt="esports logo image"
                    />
                </picture>
                <Anchor
                    direction="horizontal"
                    items={navbarAnchor}
                />
                <label
                    className="language-select"
                    htmlFor='language-select'
                >
                    <Image
                        src={EarthIcon}
                        alt='Earth icon image'
                        className='select__icon'
                    />
                    <Select
                        labelInValue
                        suffixIcon={<DownOutlined />}
                        id='language-select'
                        onChange={(selected) => dispatch(onChange(selected))}
                        value={activeLang}
                        options={languageSelect.filter(el => el.value !== activeLang.value)}
                        dropdownAlign={{ offset: [-16, 21] }}
                    />
                </label>
            </nav>
        </div>
    )
}

export default Navbar;
