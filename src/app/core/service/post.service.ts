import { Injectable } from "@angular/core";

import { HttpClient } from '@angular/common/http'
import { Post } from './../store/feature-post/post.model';
import { Observable } from "rxjs";
@Injectable()
export class PostService {
    url = 'http://localhost:4000/api/v1';

    constructor(private http: HttpClient) {

    }

    createPost(post: Post): Observable<Post> {
        return this.http.post<Post>(this.url + '/post', post);
    }

    updatePost(id: number, post: Post): Observable<Post> {
        return this.http.put<Post>(this.url + '/post', { id, post });
    }
    getPost(id: number): Observable<Post> {
        return this.http.get<Post>(this.url + '/post/' + id);
    }

    getPosts(): Observable<Post[]> {
        console.log('test');
        return this.http.get<Post[]>(this.url + '/post');
    }

}