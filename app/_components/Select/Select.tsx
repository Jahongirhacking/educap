"use client";

import IOption from "@/types/IOption";
import clsx from "clsx";
import React, { ReactElement, useEffect, useRef } from "react";
import "./Select.scss";

const Select = ({ value, options, controlOpen: [isOpen, setIsOpen], onChange, filterSort, prefixIcon, suffixIcon, className }: {
    value: IOption,
    options: IOption[],
    controlOpen: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
    onChange: (selected: IOption) => void,
    filterSort: (option: IOption) => boolean,
    prefixIcon: ReactElement,
    suffixIcon: ReactElement,
    className?: string,
}) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const dropdownClassName = clsx("dropdown-wrapper", {
        isActive: isOpen,
    })

    const handleToggle = () => {
        setIsOpen(prev => !prev);
    }

    const handleChange = (option: IOption) => {
        onChange(option);
        setIsOpen(false);
    }

    return (
        <div
            ref={ref}
            className={`custom-select ${className}`}
            onClick={handleToggle}
        >
            <div className="select__wrapper">
                {
                    React.cloneElement(prefixIcon, { className: "prefix-icon" })
                }
                <div className="select">
                    <span>{value.label}</span>

                    <div className={dropdownClassName} onClick={(e) => e.stopPropagation()}>
                        <ul className="dropdown-list">
                            {
                                options.filter(option => filterSort(option)).map((option, index) => (
                                    <li key={index} onClick={() => { handleChange(option) }}>
                                        <span>{option.label}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                {
                    React.cloneElement(suffixIcon, { className: "suffix-icon" })
                }
            </div>
        </div>
    )
}

export default Select