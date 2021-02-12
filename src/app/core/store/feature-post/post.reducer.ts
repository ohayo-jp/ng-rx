import { PostState } from "./post.state";
import * as postActions from './post.action';
const initPostState: PostState = {
    posts: [],
    currentPost: null,
    error: null,
    sort: null,
    status: 'idle'
}


export function postReducer(
    state: PostState = initPostState,
    action: postActions.PostActions
): PostState {
    switch (action.type) {
        case postActions.GET_POST:
            return { ...state, status: 'loading' };
        case postActions.GET_ALL_POST_SUCCESS:
            {
                const posts = action.posts;
                return { ...state, posts, status: 'idle' };
            }
        case postActions.GET_ALL_POST_FAILED:
            return {
                posts: [],
                currentPost: null,
                status: 'error',
                error: action.error,
                sort: null
            }
        case postActions.CREATE_POST:
            return { ...state, status: 'loading' };
        case postActions.CREATE_POST_SUCCESS:
            {
                const listPost = [...state.posts, action.post];
                return { ...state, posts: listPost, status: 'idle', currentPost: action.post };
            }
        case postActions.CREATE_POST_FAILED:
            return {
                posts: [],
                currentPost: null,
                status: 'error',
                error: action.error,
                sort: null
            }

        default:
            return state;
    }
}
