/**
 * Created by namita on 7/15/16.
 */
import {Component} from '@angular/core';
import {PostDataService} from './post-data.service';
import {PostData} from './post-data';

@Component({
    selector: 'post-list',
    template: `
        <div>
            <ul class="items">
                <li *ngFor="let post of posts">
                    <span>{{post.title}}</span>
                </li>
            </ul>
        </div>
    `
})

export class PostListComponent {
    constructor(private _postDataService:PostDataService) {
        this.getPosts();
    }

    private posts:PostData[] = [];
    private errorMessage:any = '';

    getPosts() {
        this._postDataService.getData()
            .subscribe(
                (posts) => {
                    this.posts = posts
                },
                error => this.errorMessage = <any>error);
    }
}