import './CampaignTable.css'
import CampaignTableRow from './CampaignTableRow'
import { useState, useEffect } from 'react';
import CustomCalendar from '../Calendar/Calendar'
import PricePopup from '../PricePopup/PricePopup'
import * as moment from 'moment';
import { addCampaign, editCampaign, removeCampaign } from '../../store/action/campaign'
import { useDispatch } from 'react-redux'

const currentDate = moment();
export default function CampaignTable(props) {
    const [calendarOpen, setCalendarOpen] = useState(false)
    const [pricePopupOpen, setpricePopupOpen] = useState(false)
    const [rowSelectedId, setRowSelectedId] = useState(0)
    const dispatch = useDispatch()
    console.log("props in campaign table ",props)
    function onDateSelect(date) {
        console.log("Date is ",date);
        const selectedDate = moment(date);
        console.log("selctedd date ",selectedDate)
        if (props.selctedCampaignOption == "Upcoming Campaigns") {
            if (currentDate.diff(selectedDate,"days") < 0) {
                dispatch(editCampaign({campaignName:"Upcoming Campaigns", data:{ id: rowSelectedId, createdOn: selectedDate.valueOf() }}))
            } else {
                addDataToCompaign(selectedDate);
                dispatch(removeCampaign({campaignName:"Upcoming Campaigns", data:{id: rowSelectedId}}));
            }
        }else if(props.selctedCampaignOption == "Live Campaigns"){
            if (currentDate.diff(selectedDate,"days") != 0) {
                addDataToCompaign(selectedDate);
                dispatch(removeCampaign({campaignName:"Live Campaigns", data:{id: rowSelectedId}}));
            }
        }else if(props.selctedCampaignOption == "Past Campaigns"){
            console.log(currentDate.diff(selectedDate,"days"))
            if (currentDate.diff(selectedDate,"days") > 0) {
                dispatch(editCampaign({campaignName:"Past Campaigns", data:{ id: rowSelectedId, createdOn: selectedDate.valueOf() }}))
            } else {
                addDataToCompaign(selectedDate);
                dispatch(removeCampaign({campaignName:"Past Campaigns", data:{id: rowSelectedId}}));
            }
        }
        setCalendarOpen(!calendarOpen)
    }
    function addDataToCompaign(selectedDate) {
        let data = props.campaignData.find(data => data.id = rowSelectedId);
        data.createdOn = selectedDate.valueOf();
        if(currentDate.diff(selectedDate,"days") == 0){
            dispatch(addCampaign({campaignName:"Live Campaigns", data}));
        }else if(currentDate.diff(selectedDate,"days") > 0){
            dispatch(addCampaign({campaignName:"Past Campaigns", data}));
        }else{
            dispatch(addCampaign({campaignName:"Upcoming Campaigns", data}));
        }
    }


    return (
        <div>
            <table className="table mt40px">
                <tr className="tableHead">
                    <th>DATE</th>
                    <th>Campaign</th>
                    <th>View</th>
                    <th>Actions</th>
                </tr>
                {
                    props.campaignData.map((data, index) =>
                        <CampaignTableRow data={data} setCalendarOpen={setCalendarOpen} setRowSelectedId={setRowSelectedId}  setpricePopupOpen={setpricePopupOpen}/>
                    )
                }
            </table>
            {calendarOpen ? <CustomCalendar onDateSelect={onDateSelect} /> : ""}
            {pricePopupOpen ? <PricePopup setpricePopupOpen={setpricePopupOpen}/> : ""}
        </div>
    )
}