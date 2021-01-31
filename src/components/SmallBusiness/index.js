

import React from "react"
import RoadMap from '../Roadmap/index.js'
import Card from '../Card/index.js'
import NewWayWorking from '../NewWayWorking/index.js'
import WorkWithSection from '../WorkWithSection/index.js'
import PAGE_DATA from '../../Content/homePageData'
import './smallBusiness.scss'
import Tabs from '../Tabs/index.js'

const SmallBusiness = ({NEW_WAY_WORKING_DATA, TAB_LIST }) => {
    return (
        <section className="tabs_wrapper">

           
                    <Tabs>
                        {TAB_LIST.map(item => (
                            <div DEFAULT={TAB_LIST[0].label} label={item.label} key={item.label} data={item}>
                                <div className="d-block d-md-none responsive_tab_header">
                                    <div className="tab_box_heading">{item.label}</div></div>
                                <div className="row page_sub_heading">
                                    <div className="col mt-4 mb-5 text-center">
                                        <h5 className="description">{item.Description}</h5>
                                    </div>
                                </div>
                                <Card data={item.CARDS} />
                            </div>
                        ))}
                    </Tabs>
            <NewWayWorking {...NEW_WAY_WORKING_DATA} TYPE="PRODUCTS" />
            <WorkWithSection {...PAGE_DATA.WHO_WE_WORK_WITH_DATA}/>
            <RoadMap type="BLUE" />

        </section>
    )
}

export default SmallBusiness