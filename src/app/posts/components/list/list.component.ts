import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  posts$: Observable<Post[]>;

  constructor(private postService: PostService) {
    this.posts$ = this.postService.getPosts();
  }
}
