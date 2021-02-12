import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { Post } from './core/store/feature-post/post.model';
import { vmFromLatest } from './core/utils/operators.util';
import { AppState } from './core/store/app.state';
import { currentPostSelector, postsSelector, postStatusSelector } from './core/store/feature-post/post.selector';
import { map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { createPost } from './core/store/feature-post/post.action';

export interface PostVm {
  posts?: Post[];
  currentPost?: Post;
  isLoading?: boolean;
  error?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  formControl = new FormControl();
  destroy$ = new Subject<any>();
  vm$: Observable<PostVm>;

  constructor(
    private readonly store: Store<AppState>

  ) { }


  ngOnInit(): void {

    this.vm$ = vmFromLatest<PostVm>({
      posts: this.store.pipe(select(postsSelector)),
      currentPost: this.store.pipe(select(currentPostSelector)),
      isLoading: this.store.pipe(select(postStatusSelector),
        map(status => status === 'loading'))
    });

  }

  addPost() {
    this.store.dispatch(createPost({
      post: {
        id: 1,
        content: 'hello',
        title: this.formControl.value,
        image: 'null'
      }
    }))
  }


}
