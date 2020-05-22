

import React from "react"
import Card from '../Card/index.js'
import ResponsiveTabs from '../ResponsiveTabs/index'
import NewWayWorking from '../NewWayWorking/index.js'
import './servicesList.scss'
import Tabs from '../Tabs/index.js'

const ServicesList = ({ TAB_LIST, BUILD_DESIGN, NEW_WAY_WORKING_DATA }) => {
    console.log('TAB_LIST', TAB_LIST)
    return (
        <section className='wrapper'>
            <Tabs>
                {TAB_LIST.map(item => (
                    <div DEFAULT={TAB_LIST[1].label} label={item.label} key={item.label} data={item}>
                        <div className="d-block d-md-none responsive_header">{item.label}</div>
                        <div className='row page_sub_heading'>
                            <div className="col mt-4 mb-5 text-center">
                                <h5>{BUILD_DESIGN.HEADING}</h5>
                            </div>
                        </div>
                        <Card data={BUILD_DESIGN.SERVICES_TYPES} />
                    </div>
                ))}
            </Tabs>
            <NewWayWorking {...NEW_WAY_WORKING_DATA} />
        </section>
    )
}

export default ServicesList