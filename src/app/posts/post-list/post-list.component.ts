import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  constructor(public postsService: PostsService) { }

  posts: Post[] = [];
  private postsSub: Subscription;

  ngOnInit() {
    this.getPosts();
  }

  ngOnDestroy(){
    this.postsSub.unsubscribe();
  }

  getPosts(){
    this.postsService.getPosts().subscribe(data=>{
      this.posts=data;
          });
    // console.log(this.assets);
  };

}
