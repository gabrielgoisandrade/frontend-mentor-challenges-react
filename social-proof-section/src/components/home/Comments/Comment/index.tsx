import { CommentType } from '@/@types/Comment'
import Image from 'next/image'
import styles from './comment.module.css'

type CommentProps = {
    props: CommentType
}

export const Comment = ({ props }: CommentProps) => {
    return (
        <article className={styles.comment}>
            <header className={styles.commentHeader}>
                <Image
                    className={styles.commentAvatar}
                    src={props.avatar}
                    width={80}
                    height={80}
                    alt={props.author}
                />
                <div>
                    <h3 className={styles.commentAuthor}>{props.author}</h3>
                    <h4 className={styles.commentStatus}>{props.status}</h4>
                </div>
            </header>

            <blockquote>&quot; {props.comment} &quot;</blockquote>
        </article>
    )
}
