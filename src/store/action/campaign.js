export const addCampaign = (payload)=>{
    return {
        type:"AddCampaign",
        payload
    }
}

export const removeCampaign = (payload)=>{
    return {
        type:"RemoveCampaign",
        payload
    }
}

export const editCampaign = (payload)=>{
    return {
        type:"EditCampaign",
        payload
    }
}


export const setSelectedCampaignOption = (payload)=>{
    return {
        type:"SetSelectedCampaignOption",
        payload
    }
}