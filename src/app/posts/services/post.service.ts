import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private readonly http: HttpClient) {}

  public getPosts(): any {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
