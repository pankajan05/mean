import { Component } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent{
  posts = [
    {title : "this is just a post", body : "this is the body of the post"},
      {title : "this is my life", body : "i am going to design my life"},
        {title : "i am different", body : "i am differently thing from others but i know that"}
      ];



}
