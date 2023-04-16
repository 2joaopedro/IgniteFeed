
import Styles from './Styles.module.css';
import Logo from '../../../public/Logo.svg';
export function Header() {
    return(
        <header>
            <img src={Logo}/>
            <strong>IgniteFeed</strong>
        </header>
    )
}