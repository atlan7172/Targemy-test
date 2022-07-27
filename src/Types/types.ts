export type commentType = {
    id: number
    user_id: number
    date_create: string
    content: string
}

export type postType = {
    id: number
    likes: number
    title: string
    content: string
    photo_cover: string
    date_create: string
    annotation: string
}

export type metaType = {
    totalCount: number
    pageCount: number
    currentPage: number
    perPage: number
}

export type responseComment = {
    items: Array<commentType>
    _meta: metaType
}

export type unsplashPicture = {
    id: number
    download_url: string
}