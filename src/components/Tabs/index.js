


import React, { useState, useEffect } from 'react';

import Tab from './tab';
let scrollValue = null
if (typeof window !== 'undefined') {
    scrollValue = window.scrollY
}

const Tabs = (props) => {
    const [scrollY, setScrollY] = useState(scrollValue);

    useEffect(
        () => {
            if (typeof window !== 'undefined') {
                const handleScroll = () => {
                    setScrollY(window.scrollY)
                };
                window.addEventListener("scroll", handleScroll);
                return () => window.removeEventListener("scroll", handleScroll);
            }
        },
        []
    );

    const [activeTab, setActiveTab] = useState(props.children[0].props.DEFAULT);
    useEffect(() => {
        loadDataOnlyOnce();
    }, [props.children[0].props.DEFAULT]);
    const onClickTabItem = (tab) => {
        setActiveTab(tab)
    }
    const loadDataOnlyOnce = () => {
        setActiveTab(props.children[0].props.DEFAULT);
    }
    const { children } = props;
    return (
        <div className={`container pt-5 pb-5 ${scrollY > 450 ? 'fixed_margin-50px' : ''}`}>
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