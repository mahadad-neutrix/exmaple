export interface GetDataProps {
    url: string,
    token?: string | null
}
export interface PostDataProps {
    url: string,
    token?: string | null,
    body: any
}

export interface PatchDataProps {
    url: string,
    token?: string | null,
    body: any
}

export interface DeleteDataProps {
    url: string,
    token?: string | null
}