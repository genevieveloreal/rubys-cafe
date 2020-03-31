import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  certificates: {
    display: "flex",
    margin: "10px auto",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      flexFlow: "row wrap",
      alignItems: "center"
    }

  }
}));

export default function Certificates() {

  const classes = useStyles();

  const certificates =  '<div id="TA_certificateOfExcellence485" class="TA_certificateOfExcellence"><ul id="SvzWrj6" class="TA_links bigxLfddDpP"><li id="U2fC4PSgBC" class="jUiTLd"><a target="_blank" href="https://www.tripadvisor.com.au/Restaurant_Review-g255333-d4845634-Reviews-Ruby_s_Cafe_On_Bulli_Beach-Wollongong_New_South_Wales.html"><img src="https://www.tripadvisor.com.au/img/cdsi/img2/awards/CoE2017_WidgetAsset-14348-2.png" alt="TripAdvisor" class="widCOEImg" id="CDSWIDCOELOGO"/></a></li></ul></div><script async src="https://www.jscache.com/wejs?wtype=certificateOfExcellence&amp;uniq=485&amp;locationId=4845634&amp;lang=en_AU&amp;year=2017&amp;display_version=2" data-loadtrk onload="this.loadtrk=true"></script>\n' +
    '        <div id="TA_certificateOfExcellence157" class="TA_certificateOfExcellence">\n' +
    '            <ul id="Z04EgPDc" class="TA_links 1jeMxN">\n' +
    '            <li id="BgByKOMgu" class="9Ew5pQ">\n' +
    '            <a target="_blank" href="https://www.tripadvisor.com.au/Restaurant_Review-g255333-d4845634-Reviews-Ruby_s_Cafe_On_Bulli_Beach-Wollongong_New_South_Wales.html"><img src="https://www.tripadvisor.com.au/img/cdsi/img2/awards/CoE2017_WidgetAsset-14348-2.png" alt="TripAdvisor" class="widCOEImg" id="CDSWIDCOELOGO"/></a>\n' +
    '            </li>\n' +
    '            </ul>\n' +
    '        </div>\n' +
    '        <div id="TA_certificateOfExcellence514" class="TA_certificateOfExcellence"><ul id="kpsaYhe" class="TA_links iwA36pi4"><li id="3v4Au2" class="9HQzYBVQDrvP"><a target="_blank" href="https://www.tripadvisor.com.au/Restaurant_Review-g255333-d4845634-Reviews-Ruby_s_Cafe_On_Bulli_Beach-Wollongong_New_South_Wales.html"><img src="https://www.tripadvisor.com.au/img/cdsi/img2/awards/CoE2017_WidgetAsset-14348-2.png" alt="TripAdvisor" class="widCOEImg" id="CDSWIDCOELOGO"/></a></li></ul></div><script async src="https://www.jscache.com/wejs?wtype=certificateOfExcellence&amp;uniq=514&amp;locationId=4845634&amp;lang=en_AU&amp;year=2019&amp;display_version=2" data-loadtrk onload="this.loadtrk=true"></script>\n' +
    '            <script async src="https://www.jscache.com/wejs?wtype=certificateOfExcellence&amp;uniq=157&amp;locationId=4845634&amp;lang=en_AU&amp;year=2018&amp;display_version=2" data-loadtrk onload="this.loadtrk=true"></script>\n';


  return (
      <div className={classes.certificates} dangerouslySetInnerHTML={{__html: certificates}}/>
  )

}