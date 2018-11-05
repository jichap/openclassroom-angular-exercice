import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exoTypeBlog';

  posts = [
    {
      title: 'mon premier post',
      content: 'le contenu de mon premier post...',
      loveIts: 1,
      created_at: new Date()
    },
    {
      title: 'mon second post',
      content: 'le contenu de mon second post...',
      loveIts: 5,
      created_at: new Date()
    },
    {
      title: 'mon troisieme post',
      content: 'le contenu de mon troisieme post...',
      loveIts: 1,
      created_at: new Date()
    },
  ];
}
