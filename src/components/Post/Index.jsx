import {format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Comment } from '../Comment/Index';
import { Avatar } from '../Avatar/Index';
import Styles from './Styles.module.css';

export function Post({author,publishedAt,content}) {

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })
    return (
        <article className={Styles.post}>
            <header>
                <div className={Styles.author}>
                    <Avatar isComment={false} src={author.avatarUrl}/>
                    <div className={Styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={Styles.content}>
                {
                    content.map(line => {
                        if (line.type === 'paragraph') {
                            return <p>{line.content}</p>
                        }
                        else if (line.type === 'link') {
                            return <p><a href='#'>{line.content}</a></p>
                        }
                    })
                }
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