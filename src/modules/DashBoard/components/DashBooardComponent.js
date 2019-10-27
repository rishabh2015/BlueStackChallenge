import React , { Component } from 'react';
import DashBoardHeader from '../subcomponents/DashBoardHeader';
import DashBoardMain from "../subcomponents/DashBoardMain";
import PricePopupComponent from '../subcomponents/PricePopupComponent';
import { privateEncrypt } from 'crypto';


export default class DashBoardComponent extends Component{
    constructor(props){
    super(props);
    this.state={
        tab:{
            active: 0,
            changeTab: (index) => {
            this.state.tab.active = index;
            this.setState({});
            }
        },
        pricePopup:{
            show: false,
            current_campaign:null,
            showPricePopup : (app_campaign) => {
                this.state.pricePopup.current_campaign = app_campaign;
                this.state.pricePopup.show = !this.state.pricePopup.show;
                this.setState({});
            }
        }
    }
    }
    componentDidMount(){
        document.body.classList.add("frontEndChallenge");
    }
    render(){
        var { tab, pricePopup } = this.state;
        return(
            <div className={"main"}>
            <div className="container-fluid">
            <div className="row">
            <div className="main_seaction">
            <DashBoardHeader tab={tab} />
            <DashBoardMain activeTabIndex={tab.active} pricePopup={pricePopup} />
            </div>
            </div>
            </div>
            {pricePopup.show ?
            <PricePopupComponent current_campaign={pricePopup.current_campaign}  pricePopup={pricePopup}/>:""}
            <div className="overlay"></div>
            <div className="overlay2"></div>
            </div>
        )
    }
}