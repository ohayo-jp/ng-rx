import { PostState } from './post.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';


const featurePost = createFeatureSelector<PostState>('feature_post');
export const postsSelector = createSelector(featurePost, state => state.posts);
export const currentPostSelector = createSelector(featurePost, state => state.currentPost);
export const postStatusSelector = createSelector(featurePost, state => state.status);
