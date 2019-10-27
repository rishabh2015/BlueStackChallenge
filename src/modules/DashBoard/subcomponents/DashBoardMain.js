import React, { Component } from 'react';
import DashBoardCampaignListing from "./DashBoardCampaignListing";

export default class DashBoardMain extends Component{

    render(){
        var { activeTabIndex, pricePopup } = this.props;
        return(
        <div className="inner_section">
        <div className="tab-content" id="pending-tabContent" >
        <div className="tab-pane fade" id="pending" role="tabpanel" aria-labelledby="pending-tab">
        </div>
        <div className="tab-pane fade active show" id="complete" role="tabpanel" aria-labelledby="complete-tab" >
        <div className="table-responsive">
        <table className="table">
        <thead className="bg-default">
        <tr>
        <th scope="col" className={"col1"} >Date</th>
        <th scope="col" className={"col2"}>Campaign</th>
        <th scope="col" className={"col3"}>View</th>
        <th scope="col" className={"col4"}>Actions</th>
        </tr>
        </thead>
        <DashBoardCampaignListing pricePopup={pricePopup} currentState={activeTabIndex} />
        </table>
        </div>
        </div>
        </div>
        </div>
        )
    }
}