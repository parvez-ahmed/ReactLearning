import * as moment from 'moment';


export default function CampaignTableRow(props){
    const currentDate = moment();
    return (
        <tr className="tableData">
                        <td>
                            <div>
                            {moment(props.data.createdOn).format("MMM YYYY,D")}
                            </div>
                            <div className="timeDiff">
                                { currentDate.diff(moment(props.data.createdOn),"days") > 0 ? currentDate.diff(moment(props.data.createdOn),"days") + " Days Ago" : currentDate.diff(moment(props.data.createdOn),"days") == 0 ? "" : Math.abs(currentDate.diff(moment(props.data.createdOn),"days")) + " Days Ahead"}
                            </div>
                            </td>
                        <td>
                            <div className="tdDivContainer displayFlex">
                                <img className="tdCampaignImage" src={`/images/${props.data.image_url}`} />
                                <div className="displayFlex columnFlexDirection spaceBetweenJustifyContent ml10px">
                                    <span>{props.data.name}</span>
                                    <span>US</span>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="tdDivContainer displayFlex flexAlignCenter" onClick={()=>props.setpricePopupOpen(true)}>
                                <img className="tdPriceImage" src='/images/Price.png' />
                                <span className="ml10px">View Pricing</span>
                            </div>
                        </td>

                        <td>
                            <div className="displayFlex spaceBetweenJustifyContent flexAlignCenter">
                                <div id="csv" className="displayFlex flexAlignCenter">
                                    <img id="actionTdImageCSV" src="/images/file.png" />
                                    <span className="ml10px">CSV</span>
                                </div>
                                <div id="report" className="displayFlex flexAlignCenter">
                                    <img id="actionTdImageReport" src="/images/statistics-report.png" />
                                    <span className="ml10px">Report</span>
                                </div>
                                <div id="calender" className="displayFlex flexAlignCenter mr10px" onClick={()=>{props.setRowSelectedId(props.data.id); props.setCalendarOpen(true)}}>
                                    <img id="actionTdImageCalendar" src="/images/calendar.png" />
                                    <span className="ml10px positionRelative">
                                        Schedule Again
                                    </span>
                                </div>
                            </div>
                        </td>
                    </tr>
    )
}