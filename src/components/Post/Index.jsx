import { Comment } from '../Comment/Index';

import Styles from './Styles.module.css';

export function Post() {
    return (
        <article className={Styles.post}>
            <header>
                <div className={Styles.author}>
                    <img className={Styles.avatar} src="https://github.com/diego3g.png"/>
                    <div className={Styles.authorInfo}>
                        <strong>Diego Fernandes</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title='2022-05-11 08:13:00'>Publicado há 1h</time>
            </header>

            <div className={Styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. 
                    É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 👋</p>
                <p>👉{' '}<a href='#'>jane.design/doctorcare</a></p>
                <p>
                    <a href='#'>#novoprojeto</a>{' '}
                    <a href='#'>#nlw</a>{' '}
                    <a href='#'>#rocketseat</a>
                </p>
            </div>
            <form className={Styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder="Deixe um comentário"/>
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={Styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
}