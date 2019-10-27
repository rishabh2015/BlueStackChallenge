import React, { Component } from 'react';
import { supportedLanguageStrings } from "../../Utils/Constant"; 
import { translate } from "react-i18next";

export class LanguageDropdownComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
          selected_language: { languageName: "English", languageCode: "en" },
          popup:false
        };
        this.handleLanguageChange = this.handleLanguageChange.bind(this);
      }
    handleLanguageChange=(langObj)=> {
        var language = langObj;
        this.props.i18n.changeLanguage(language.languageCode);
        
        this.setState({ selected_language: language  });
      }
      getLanguageOptionHTML = () => {
          var { t, i18n } = this.props;
          var {selected_language} = this.state;
          var { handleLanguageChange } = this;
          var languageHTML = supportedLanguageStrings.map((language)=>{
              return(<li onClick={()=>{handleLanguageChange(language)}}> 
                     <span class={selected_language.languageCode == language.languageCode?"active":""}>{t(language.languageName)}</span>
                     </li>)
          });
          return languageHTML;
      }
    render(){
        const { t, i18n } = this.props;
        var { selected_language } = this.state;
        var languageOptionHTML = this.getLanguageOptionHTML();
        return(
            <div class="nav-wrapper">
            <div class="sl-nav">
            Language:
            <ul>
            <li><b>{t(selected_language.languageName)}</b> <i class="fa fa-angle-down" aria-hidden="true"></i>
            <div class="triangle"></div>
            <ul>
                {languageOptionHTML}
            </ul>
            </li>
            </ul>
            </div>
            </div>
        );
    }
}
export default translate("translations")(LanguageDropdownComponent);