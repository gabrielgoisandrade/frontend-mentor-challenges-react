import { CommentType } from '@/@types/Comment'
import Anne from '@/assets/images/image-anne.jpg'
import Colton from '@/assets/images/image-colton.jpg'
import Irene from '@/assets/images/image-irene.jpg'
import { Comment } from './Comment'
import styles from './comments.module.css'

export const Comments = () => {
    const comments: CommentType[] = [
        {
            author: 'Colton Smith',
            avatar: Colton,
            status: 'Verified Buyer',
            comment:
                'We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!',
        },
        {
            author: 'Irene Roberts',
            avatar: Irene,
            status: 'Verified Buyer',
            comment:
                'Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.',
        },
        {
            author: 'Anne Wallace',
            avatar: Anne,
            status: 'Verified Buyer',
            comment:
                'Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!',
        },
    ]

    return (
        <div className={styles.comments}>
            {comments.map((comment) => (
                <Comment key={comment.author} props={comment} />
            ))}
        </div>
    )
}
