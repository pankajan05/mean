import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stored_posts = [];

  onPostAdded(post) {
    this.stored_posts.push(post);
  }
}
