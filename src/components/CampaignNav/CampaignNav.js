import './CampaignNav.css'
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedCampaignOption } from '../../store/action/campaign'
export default function CampaignNav(props) {
    const dispatch = useDispatch()
    return (
        <div className="NavContainer mt40px">
            {
                props.campaignOptions.map(campaign => (
                    <div className={`NavItem ${campaign == props.selctedCampaignOption ? "NavItemSelect" : ""}`}  onClick={()=>dispatch(setSelectedCampaignOption({campaign:campaign}))} >
                        <p>{campaign}</p>
                    </div>
                ))
            }
        </div>
    )
}