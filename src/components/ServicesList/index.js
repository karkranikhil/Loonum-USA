

import React from "react"
import Card from '../Card/index.js'
import ResponsiveTabs from '../ResponsiveTabs/index'
import NewWayWorking from '../NewWayWorking/index.js'
import './servicesList.scss'
import Tabs from '../Tabs/index.js'

const ServicesList = ({ TAB_LIST, BUILD_DESIGN, NEW_WAY_WORKING_DATA}) => {
    return (
        <section className='wrapper'>

            <div className="container pt-5 pb-5">
                <div className="d-block d-lg-none">
                    <ResponsiveTabs>
                        {TAB_LIST.map(item => (
                            <div label={item} key={item}>
                                <div class="d-block d-lg-none responsive_header">{item}</div>
                                <div className='row page_sub_heading'>
                                    <div className="col mt-4 mb-5 text-center">
                                        <h5>{BUILD_DESIGN.HEADING}</h5>
                                    </div>
                                </div>
                                <Card data={BUILD_DESIGN.SERVICES_TYPES} />
                            </div>
                        ))}
                    </ResponsiveTabs>
                </div>
                <div className="d-none d-lg-block">
                    <Tabs>
                        {TAB_LIST.map(item => (
                            <div DEFAULT={TAB_LIST[1]} label={item} key={item}>
                                <div class="d-block d-lg-none responsive_header">{item}</div>
                                <div className='row page_sub_heading'>
                                    <div className="col mt-4 mb-5 text-center">
                                        <h5>{BUILD_DESIGN.HEADING}</h5>
                                    </div>
                                </div>
                                <Card data={BUILD_DESIGN.SERVICES_TYPES} />
                            </div>
                        ))}
                    </Tabs>
                </div>
            </div>
            <NewWayWorking {...NEW_WAY_WORKING_DATA} />
        </section>
    )
}

export default ServicesList