


import React, { useState, useEffect } from 'react';

import Tab from './tab';
export function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function () {
        const context = this;
        const args = arguments;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const Tabs = (props) => {
    const [scrollY, setScrollY] = useState(window.scrollY);

    useEffect(
        () => {
            const handleScroll = () => setScrollY(window.scrollY);
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        },
        [debounce] // If you remove this, things go 🍌🍌🍌
    );

    const [activeTab, setActiveTab] = useState(props.children[0].props.DEFAULT);

    const onClickTabItem = (tab) => {
        setActiveTab(tab)
    }

    const { children } = props;
    console.log(scrollY)
    return (
        <div className={`container pt-5 pb-5 ${scrollY > 450 ? 'fixed_margin-50px':''}`}>
            <div className="tabs">
                <ol className={scrollY > 450 ? "tab-list-fixed" : "tab-list"}>
                    {children.map((child) => {
                        const { label, data } = child.props;
                        return (
                            <Tab
                                activeTab={activeTab}
                                key={label}
                                label={label}
                                tabData={data}
                                isscroll={scrollY}
                                onClick={onClickTabItem}
                            />
                        );
                    })}
                </ol>
                <div className="tab-content">
                    {children.map((child) => {
                        if (child.props.label !== activeTab) return undefined;
                        return child.props.children;
                    })}
                </div>
            </div>
        </div>
    );
}

export default Tabs;