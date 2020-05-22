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

    let className = '';
    let imageName = ''
    if (activeTab === label) {
        className += 'tab-list-active';
        imageName = props.tabData.image_active
    } else {
        className = 'tab-list-item'
        imageName = props.tabData.image
    }

    return (
        <li
            className={className}
            onClick={onClick}
            onKeyDown={handleKeyDown}
        >
            <div className="col-12 d-md-none">
                <img src={imageName} alt={props.tabData.mobileLabel} height='30px' />
                {/* <br />
                <span>{props.tabData.mobileLabel}</span> */}
            </div>
            <div className="d-none d-md-block">
                <div>{props.tabData.mobileLabel}</div>
                {/* <br />
                <span>{props.tabData.mobileLabel}</span> */}
            </div>

        </li>
    );
}

export default Tab;