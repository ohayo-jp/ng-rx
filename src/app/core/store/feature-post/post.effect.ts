import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { PostService } from "../../service/post.service";
import { mergeMap, map, catchError, switchMap } from 'rxjs/operators';
import * as postsActions from './post.action';
import { of } from "rxjs";
import { Post } from "./post.model";
@Injectable()
export class PostEffect {
  loadPosts$ = createEffect(() => this.actions$.pipe(
    ofType(postsActions.getAllPost),
    mergeMap(() => this.postSerivce.getPosts()),
    switchMap((posts: Post[]) => of(postsActions.getAllPostSuccess({ posts}))
    ),
    catchError((err) => of(postsActions.getAllPostFailed({ error: err })))
  ));

  createPost$ = createEffect(() => this.actions$.pipe(
    ofType(postsActions.createPost),
    switchMap((payload) => this.postSerivce.createPost(payload.post)),
    switchMap((post: Post) => of(postsActions.createPostSuccess({ post }))
    ),
    catchError((err) => of(postsActions.getAllPostFailed({ error: err })))
  ));

  constructor(
    private actions$: Actions,
    private postSerivce: PostService
  ) {

  }
}