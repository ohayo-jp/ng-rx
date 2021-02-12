import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { PostService } from "./service/post.service";
import { PostEffect } from "./store/feature-post/post.effect";
import { postsSelector } from "./store/feature-post/post.selector";
import {postReducer} from './store/feature-post/post.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('feature_post', postReducer),
    EffectsModule.forFeature([
      PostEffect,
    ])],


  providers: [
    PostService
  ],
  exports: [],
})
export class ClientCoreModule { }
