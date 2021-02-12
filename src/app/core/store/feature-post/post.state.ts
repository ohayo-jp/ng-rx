import { Post } from "./post.model";

export type statusType = 'loading'|'idle'|'error';
export type errorType  = string| null;
export type sortType = 'ACS'|'DESC'|null;
export interface PostState { 
    posts: Post[];
    currentPost: Post;
    status: statusType;
    error: errorType;
    sort: sortType;
}