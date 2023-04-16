import Styles from './Styles.module.css';
import { BiEditAlt } from 'react-icons/bi';

export function SideBar() {
    return(
        <aside className={Styles.sidebar}>
            <img 
                className={Styles.cover} 
                src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            />

            <div className={Styles.profile}>
                <div className={Styles.avatarBorder}>
                    <img className={Styles.avatar} src="https://github.com/diego3g.png"/>
                </div>
                <strong>Diego Fernandes</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#"> 
                    <BiEditAlt size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}