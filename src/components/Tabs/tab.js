import React from 'react';
import './tab.scss'
const Tab = (props) => {

    const onClick = () => {
        const { label, onClick } = props;
        onClick(label);
    }
    const handleKeyDown = (ev) => {
        if (ev.keyCode === 13) {
            this.onClick()
        }
    }
    const { activeTab, label } = props;

    let className = 'tab-list-item';

    if (activeTab === label) {
        className += ' tab-list-active';
    }

    return (
        <li
            className={className}
            onClick={onClick}
            onKeyDown={handleKeyDown}
        >
            {label}
        </li>
    );
}

export default Tab;