import { FaRegTrashAlt,FaRegThumbsUp } from 'react-icons/fa';

import Styles from './Styles.module.css';

export function Comment() {
    return(
        <div className={Styles.comment}>
            <img src='https://github.com/diego3g.png'/>

            <div className={Styles.commentBox}>
                <div className={Styles.commentContent}>
                    <header>
                        <div className={Styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title='2022-05-11 08:13:00'>Cerca de 1h atrás</time>
                        </div>
                        <button title="Deletar comentário">
                            <FaRegTrashAlt size={24}/>
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏 </p>
                </div>

                <footer>
                    <button>
                        <FaRegThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}