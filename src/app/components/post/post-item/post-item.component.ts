import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { SessionService } from './../../../shared/services/session.service';
import { Post } from './../../../shared/models/post.model';
import { User } from './../../../shared/models/user.model';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PostService } from '../../../shared/services/post.service';


@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit, OnDestroy {
  @Input() post: Post = new Post();
  authUser: User = new User();
  onAuthUserChanges: Subscription;

  constructor(
    private sessionService: SessionService,
    private postService: PostService) { }

  ngOnInit() {
    this.authUser = this.sessionService.user;
    console.log(this.authUser);
    console.log(this.post);
    this.onAuthUserChanges = this.sessionService.onUserChanges()
      .subscribe((user: User) => this.authUser = user);
  }

  ngOnDestroy() {
    this.onAuthUserChanges.unsubscribe();
  }

  onClickDeletePost() {
    if (this.authUser.id === this.post.user) {
      this.postService.delete(this.post.user, this.post.id)
        .subscribe(() => {});
    }
  }

}
