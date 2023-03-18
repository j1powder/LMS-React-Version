import { Menubar } from 'primereact/menubar';
//theme
import "primereact/resources/themes/soho-light/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";
//import logo from './cropped-JJ-safety-logo3-1-1.webp';

const Header = () => {
const items = [
    { label: 'Home', command: () => {
        window.location.href = '/'
    }},
    { label: 'Login', command: () => {
        window.location.href='/Login'
    } },
    { label: 'Dashboard', command: () => {
        window.location.href='/Dashboard'
    }}
]
//const start = <img src={logo} alt="logo"/>
    return  <div className="card">
    <Menubar model={items}  />
           </div>
}

export default Header;