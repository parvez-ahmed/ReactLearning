import { useState } from 'react';
import './CampaignPage.css'
import CampaignNav from '../../components/CampaignNav/CampaignNav';
import CampaignTable from '../../components/CampaignTable/CampaignTable';
import { useSelector } from 'react-redux'

export default function CampaignPage() {
    const campaignOptions = useSelector(state=>state?.campaign?.campaignOptions);
    const selctedCampaignOption = useSelector(state=>state?.campaign.selectedOption)
    const campaignData = useSelector(state=>state?.campaign[selctedCampaignOption]);
    return (
        <div>
            <h1 id="CompaignPageHeading" className="mt40px">Manage Campaigns</h1>
            <CampaignNav campaignOptions={campaignOptions} selctedCampaignOption={selctedCampaignOption} />
            <CampaignTable campaignData={campaignData} selctedCampaignOption={selctedCampaignOption}/>
        </div>
    )
}