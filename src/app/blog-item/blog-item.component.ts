import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css'],
})
export class BlogItemComponent {
  @Input() title = '';

  @Input() date = '';

  @Input() author = 'rvasseur31';
  @Input() authorGithub = 'https://github.com/rvasseur31';

  @Input() description = '';

  @Input() headerImage = '';
}
