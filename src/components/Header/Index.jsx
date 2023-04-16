
import Styles from './Styles.module.css';
import Logo from '../../../public/Logo.svg';
export function Header() {
    return(
        <header className={Styles.header}>
            <img src={Logo} alt="Logotipo do Ignite"/>
            <strong>IgniteFeed</strong>
        </header>
    )
}