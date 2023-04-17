import Styles from './Styles.module.css';

export function Avatar({isComment = true, src}) {
    return (
        <img className={isComment ? Styles.avatarcomment : Styles.avatar} src={src}/>
    )
}