import { Avatar } from '../Avatar/Index';

import { FaRegTrashAlt,FaRegThumbsUp } from 'react-icons/fa';

import Styles from './Styles.module.css';
import { useState } from 'react';

export function Comment({content, onDeleteComment}) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment(){
        setLikeCount((state) => {
            return state + 1
        });
    }
    return(
        <div className={Styles.comment}>
            <Avatar isComment={true} src='https://github.com/diego3g.png'/>

            <div className={Styles.commentBox}>
                <div className={Styles.commentContent}>
                    <header>
                        <div className={Styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title='2022-05-11 08:13:00'>Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <FaRegTrashAlt size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <FaRegThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}