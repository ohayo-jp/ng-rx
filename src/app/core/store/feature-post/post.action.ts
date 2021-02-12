
import { ActionType, createAction, props } from '@ngrx/store';
import { Post } from './post.model';

export const GET_ALL_POST = '@Post/GetAllPost';
export const GET_ALL_POST_SUCCESS = '@Post/GetAllPostSuccess';
export const GET_ALL_POST_FAILED = '@Post/GetAllPostFailed';

//
export const CREATE_POST = '@Post/CreatePost';
export const CREATE_POST_SUCCESS = '@Post/CreatePostSuccess';
export const CREATE_POST_FAILED = '@Post/CreatePostFailed';

//
export const GET_POST = '@Post/GetPost';
export const GET_POST_SUCCESS = '@Post/GetPostSuccess';
export const GET_POST_FAILED = '@Post/GetPostFailed';

//
export const UPDATE_POST = '@Post/Update';
export const UPDATE_POST_SUCCESS = '@Post/UpdateSuccess';
export const UPDATE_POST_FAILED = '@Post/UpdateFailed';

//
export const SORTING_POSTS = '@Post/Sorting';


//
export const getAllPost = createAction(GET_ALL_POST);
export const getAllPostSuccess = createAction(GET_ALL_POST_SUCCESS, props<{ posts: Post[] }>());
export const getAllPostFailed = createAction(GET_ALL_POST_FAILED, props<{ error?: string }>());
//
export const createPost = createAction(CREATE_POST, props<{ post: Post }>());
export const createPostSuccess = createAction(CREATE_POST_SUCCESS, props<{ post: Post }>());
export const createPostFailed = createAction(CREATE_POST_FAILED, props<{ error?: string }>());
//
export const getPost = createAction(GET_POST, props<{ id: number }>());
export const getPostSuccess = createAction(GET_POST_SUCCESS, props<{ post: Post }>());
export const getPostFailed = createAction(GET_POST_FAILED, props<{ error?: string }>());
//
export const updatePost = createAction(UPDATE_POST, props<{ id: number, post: Post }>());
export const updatePostSuccess = createAction(UPDATE_POST_SUCCESS, props<{ post: Post }>());
export const updatePostFailed = createAction(UPDATE_POST_FAILED, props<{ error?: string }>());

//
export const sortingPosts = createAction(SORTING_POSTS, props<{ posts: Post[] }>());



export type PostActions =
    | ActionType<typeof getAllPost>
    | ActionType<typeof getAllPostSuccess>
    | ActionType<typeof getAllPostFailed>
    | ActionType<typeof createPost>
    | ActionType<typeof createPostSuccess>
    | ActionType<typeof createPostFailed>
    | ActionType<typeof getPost>
    | ActionType<typeof getPostSuccess>
    | ActionType<typeof getPostFailed>
    | ActionType<typeof updatePost>
    | ActionType<typeof updatePostSuccess>
    | ActionType<typeof updatePostFailed>
    | ActionType<typeof sortingPosts>;