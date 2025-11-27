import { StaticImageData } from "next/image"

export type CommentType = {
    author: string
    avatar: StaticImageData
    status: string
    comment: string
}
