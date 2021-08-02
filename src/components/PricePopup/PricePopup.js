import './PricePopup.css'
export default function PricePopup(props){
    return (
        <div className="PopUpContainer">
            
            <div className="PriceContainer p10px">
                <div className="PricePopupHeaderContainer displayFlex flexAlignEnd">
                    <img src="/images/Bitmap.png"/>
                    <div className=" displayFlex columnFlexDirection p10px">
                        <span className="mb10px">PUBG Mobile</span>
                        <span >US</span>
                    </div>
                </div>
                <div className="PricePopContent p10px">
                    <h1>Pricing</h1>
                    <div>
                        <div className="displayFlex spaceBetweenJustifyContent mt20px">
                            <span className="priceText">1 Week - 1 Month</span>
                            <span className="priceAmount">$ 100.00</span>
                        </div>
                        <div className="displayFlex spaceBetweenJustifyContent mt20px">
                            <span className="priceText">6 Months</span>
                            <span className="priceAmount">$ 500.00</span>
                        </div>
                        <div className="displayFlex spaceBetweenJustifyContent mt20px">
                            <span className="priceText">1 Year</span>
                            <span className="priceAmount">$ 900.00</span>
                        </div>
                    </div>
                </div>
                <div className="PricePopButtonContainer displayFlex flexAlignCenter justifyContentCenter mt40px mb10px">
                    <button onClick={()=>props.setpricePopupOpen(false)}>Close</button>
                </div>
            </div>
        </div>
    )
}