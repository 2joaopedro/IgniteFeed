import {format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Comment } from '../Comment/Index';
import { Avatar } from '../Avatar/Index';
import Styles from './Styles.module.css';
import { useState } from 'react';

export function Post({author,publishedAt,content}) {
    const [comments, setComments] = useState(['teste'])

    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleNewCommentChange() {
        event.target.setCustomValidity("");
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity("Esse campo é obrigatório!");
    }

    function handleCreateNewComment() {
        event.preventDefault();

        setComments([...comments, newCommentText]);

        setNewCommentText('');
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })
        setComments(commentsWithoutDeleteOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0;
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
                            return <p key={line.content}>{line.content}</p>
                        }
                        else if (line.type === 'link') {
                            return <p key={line.content}><a href='#'>{line.content}</a></p>
                        }
                    })
                }
            </div>
            <form onSubmit={handleCreateNewComment} className={Styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    name="comment" 
                    placeholder="Deixe um comentário" 
                    value={newCommentText} 
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={Styles.commentList}>
                {
                    comments.map(comment => {
                        return <Comment key={comment} content={comment} onDeleteComment={deleteComment}/>
                    })
                }
            </div>
        </article>
    )
}