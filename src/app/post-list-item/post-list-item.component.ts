import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title: String;
  @Input() content: String;
  @Input() created_at: String;
  @Input() loveIts: Number;

  constructor() { 
  }
  
  onIncrementLoveIts(Its) {
    Its = Its + 1;
    this.loveIts = Its;
  }
  onDecrementLoveIts(Its) {
    Its = Its - 1;
    this.loveIts = Its;
  }

  ngOnInit() {
  }

}
