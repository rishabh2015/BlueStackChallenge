import React, { Component } from 'react';
import {JSON_DATA} from "../../Utils/Constant";
import { getDateString, getDaysDifference } from '../../Utils/Utils';
import view_price from "../../../assets/Images/Price.png";
import file from "../../../assets/Images/file.png";
import calendar from "../../../assets/Images/calendar.png";
import statistics_report from "../../../assets/Images/statistics-report.png";


export default class DashBoardCampaignListing extends Component{

    getAppCampaignHTML = (campaigns) => {
        var appCampaignHTML = "";
        if(campaigns.length > 0){
        var { pricePopup } = this.props;
        appCampaignHTML = campaigns.map((app_campaign, key)=>{
         return(
            <tr key={key}>
            <td>
            <div  className="cm-flex-center text-16 date">  
            <p >{getDateString(app_campaign.createdOn)}</p>
            </div>
            <div className="cm-flex-center text-13 text-muted">
            <p >{getDaysDifference(new Date(app_campaign.createdOn), new Date())}</p>
            </div></td>
            <td>
            <div className="desktop-card text-12 max-width-680 p-0 bxs-none" >
            <div className="d-flex justify-content-between">
            <div className="mr-3 max-width-52">
            <img src={app_campaign.image_url} alt="image"/>
            </div>
    
            <div className="d-flex flex-column justify-content-around w-100">
            <div>
            <p className="font-weight-bold text-16 app_name" >{app_campaign.name}</p>
            <p className="text-12 text-muted">{app_campaign.region}</p>
            </div>
            </div>
            </div>
            </div>
            </td>
            <td>
            <a  className="mr-5 text-12 decline" onClick={()=>{pricePopup.showPricePopup(app_campaign)}}>
            <img src={view_price} alt="decline" className="max-width-24"/> 
            <span className="pdl-10 fs-13">View Summary</span>
            </a>
            </td>
            <td>
            <a  className="mr-5 text-12 decline">
            <img src={file} alt="decline" className="max-width-24" /> 
            <span className="pdl-10 fs-13">CSV</span>
            </a>
            <a  className="mr-5 text-12 decline">
            <img src={statistics_report} alt="decline" className="max-width-24"/> 
            <span className="pdl-10 fs-13">Report</span>
            </a>
            <a className="mr-5 text-12 decline">
            <img src={calendar} alt="decline" className="max-width-24" /> 
            <span className="pdl-10 fs-13">Schedule Again</span>
            </a>
            </td>
            </tr>
            )
        });
        }
        return appCampaignHTML;
    }

    getUpcomingAppCampaigns = ()=> {
        var upcomingCampaigns = JSON_DATA.data.filter((app_campaign)=>{
        return new Date(app_campaign.createdOn)>new Date(); 
        });
        return upcomingCampaigns;
    }
    getLiveCampaigns = () => {
        var liveCampaigns = JSON_DATA.data.filter((app_campaign)=>{
         return getDateString(app_campaign.createdOn) == getDateString(new Date().getTime());
        })
        return liveCampaigns;
    }

    getPastCampaigns = () => {
        var pastCampaigns = JSON_DATA.data.filter((app_campaign)=>{
            return (new Date(app_campaign.createdOn) < new Date() && !(getDateString(app_campaign.createdOn) == getDateString(new Date().getTime())));
        })
        return pastCampaigns;
    }

    render(){
        var { currentState } = this.props;
        var { getUpcomingAppCampaigns, getAppCampaignHTML, getPastCampaigns, getLiveCampaigns } = this;
        var returnHTML , campaigns;
        if(currentState == 0){
            campaigns = getUpcomingAppCampaigns();
        }
        else if(currentState == 1){
            campaigns = getLiveCampaigns();
        } 
        else{
            campaigns = getPastCampaigns();
        }
        returnHTML = getAppCampaignHTML(campaigns); 
        return(<tbody>{returnHTML}</tbody>);
    }
}