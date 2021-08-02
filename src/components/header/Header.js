import './Header.css'
import logo from '../../assets/logo.png'
export default function Header(){
    return (
        <div class="HeaderWrapper">
            <div class="ContentWrapper">
              <div class="HeaderContent">
                  <img src={logo} id="logo"/>
              </div>
            </div>
        </div>
    )
}