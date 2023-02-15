import { Component, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  @Input() content: Content;

  constructor(){
  }

  logInfo(content: Content){
    console.log('ID: ', content.id, ' TITLE: ', content.title);
  }
}
