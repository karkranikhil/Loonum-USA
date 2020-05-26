

import React from "react"
import Card from '../Card/index.js'
import NewWayWorking from '../NewWayWorking/index.js'
import './servicesList.scss'
import Tabs from '../Tabs/index.js'

const ServicesList = (props) => {
    const { TAB_LIST, NEW_WAY_WORKING_DATA } = props
    let defaultTab = props.location && props.location.state && props.location.state.tabLabel || TAB_LIST[1].label
    console.log("defaultTab", defaultTab)
    return (
        <section className='wrapper'>
            <Tabs>
                {TAB_LIST.map(item => (
                    <div DEFAULT={defaultTab} label={item.label} key={item.label} data={item}>
                        <div className="d-block d-md-none responsive_header">{item.label}</div>
                        <div className='row page_sub_heading'>
                            <div className="col mt-4 mb-5 text-center">
                                <h5>{item.Description}</h5>
                            </div>
                        </div>
                        <Card data={item.CARDS} />
                    </div>
                ))}
            </Tabs>
            <NewWayWorking {...NEW_WAY_WORKING_DATA} />
        </section>
    )
}

export default ServicesList