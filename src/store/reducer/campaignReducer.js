import * as moment from 'moment';

const initialData = {
    "Upcoming Campaigns":[{
    "id":1,    
    "name": "Test Whatsapp",
    "region": "US",
    "createdOn": moment().add(5,"days").valueOf(),
    "price": "Price info of Test Whatsapp",
    "csv": "Some CSV link for Whatsapp",
    "report": "Some report link for Whatsapp",
    "image_url":"Bitmap0.png" 
  },
  {
    "id":2,
    "name": "Super Jewels Quest",
    "region": "CA, FR",
    "createdOn": moment().add(6,"days").valueOf(),
    "price": "Price info of Super Jewels Quest",
    "csv": "Some CSV link for Super Jewels Quest",
    "report": "Some report link for Super Jewels Ques",
    "image_url":"Bitmap1.png"
  },
  {
    "id":3,
    "name": "Mole Slayer",
    "region": "FR",
    "createdOn": moment().add(7,"days").valueOf(),
    "price": "Price info of Mole Slayer",
    "csv": "Some CSV link for Mole Slayer",
    "report": "Some report link for Mole Slayer",
    "image_url":"Bitmap2.png"
  },
  {
    "id":4,
    "name": "Mancala Mix",
    "region": "JP",
    "createdOn": moment().add(8,"days").valueOf(),
    "price": "Price info of Mancala Mix",
    "csv": "Some CSV link for Mancala Mix",
    "report": "Some report link for Mancala Mix",
    "image_url":"Bitmap3.png"
  }
],
"Live Campaigns":[{
    "id":5,
    "name": "Live",
    "region": "US",
    "createdOn": moment().valueOf(),
    "price": "Price info of Test Whatsapp",
    "csv": "Some CSV link for Whatsapp",
    "report": "Some report link for Whatsapp",
    "image_url":"Bitmap0.png" 
  },
  {
    "id":6,
    "name": "Super Jewels Quest",
    "region": "CA, FR",
    "createdOn": moment().valueOf(),
    "price": "Price info of Super Jewels Quest",
    "csv": "Some CSV link for Super Jewels Quest",
    "report": "Some report link for Super Jewels Ques",
    "image_url":"Bitmap1.png"
  },
  {
    "id":7,
    "name": "Mole Slayer",
    "region": "FR",
    "createdOn": moment().valueOf(),
    "price": "Price info of Mole Slayer",
    "csv": "Some CSV link for Mole Slayer",
    "report": "Some report link for Mole Slayer",
    "image_url":"Bitmap2.png"
  },
  {
    "id":8,
    "name": "Mancala Mix",
    "region": "JP",
    "createdOn": moment().valueOf(),
    "price": "Price info of Mancala Mix",
    "csv": "Some CSV link for Mancala Mix",
    "report": "Some report link for Mancala Mix",
    "image_url":"Bitmap3.png"
  }
],
"Past Campaigns":[{
    "id":9,
    "name": "Past",
    "region": "US",
    "createdOn": moment().subtract(1,"days").valueOf(),
    "price": "Price info of Test Whatsapp",
    "csv": "Some CSV link for Whatsapp",
    "report": "Some report link for Whatsapp",
    "image_url":"Bitmap0.png" 
  },
  {
    "id":10,
    "name": "Super Jewels Quest",
    "region": "CA, FR",
    "createdOn": moment().subtract(2,"days").valueOf(),
    "price": "Price info of Super Jewels Quest",
    "csv": "Some CSV link for Super Jewels Quest",
    "report": "Some report link for Super Jewels Ques",
    "image_url":"Bitmap1.png"
  },
  {
    "id":11,
    "name": "Mole Slayer",
    "region": "FR",
    "createdOn": moment().subtract(3,"days").valueOf(),
    "price": "Price info of Mole Slayer",
    "csv": "Some CSV link for Mole Slayer",
    "report": "Some report link for Mole Slayer",
    "image_url":"Bitmap2.png"
  },
  {
    "id":12,
    "name": "Mancala Mix",
    "region": "JP",
    "createdOn": moment().subtract(4,"days").valueOf(),
    "price": "Price info of Mancala Mix",
    "csv": "Some CSV link for Mancala Mix",
    "report": "Some report link for Mancala Mix",
    "image_url":"Bitmap3.png"
  }
],
campaignOptions:["Upcoming Campaigns", "Live Campaigns", "Past Campaigns"],
selectedOption:"Upcoming Campaigns"
};

const campaignReducer = (state=initialData,action)=>{
    switch (action.type) {
        case "SetSelectedCampaignOption":
            return {
                ...state,
                selectedOption:action?.payload?.campaign
            }
        case "AddCampaign":{
            return {
                ...state,
                [action.payload.campaignName]:[...state[action.payload.campaignName],action.payload.data]
            }
        }
        case "RemoveCampaign":{
            return {
                ...state,
                [action.payload.campaignName]:state[action.payload.campaignName].filter(data => data.id != action.payload.data.id)
            }
        }
        case "EditCampaign":{
            return {
                ...state,
                [action.payload.campaignName]:state[action.payload.campaignName].map(data=>{
                    if(data.id == action.payload.data.id){
                        return {
                            ...data,
                            createdOn:action.payload.data.createdOn
                        }
                    }else{
                        return data;
                    }
                })
            }
        }
        default:
            return state
    }
}

export {
    campaignReducer
}