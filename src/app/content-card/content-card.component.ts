import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  myContentList : ContentList = new ContentList();

  contentItem1 : Content = {
    id: 0,
    title: 'mySampleTitle',
    description: 'This is a description',
    creator: 'Creator'
  }
  contentItem2 : Content = {
    id: 0,
    title: 'mySampleTitle2',
    description: 'This is a description2',
    creator: 'Creator2'
  }
  contentItem3 : Content = {
    id: 0,
    title: 'mySampleTitle3',
    description: 'This is a description4',
    creator: 'Creator2'
  }
  contentItem4 : Content = {
    id: 0,
    title: 'mySampleTitle4',
    description: 'This is a description4',
    creator: 'Creator'
  }

  constructor(){
    this.myContentList.addFunction(this.contentItem1);
    this.myContentList.addFunction(this.contentItem2);
    this.myContentList.addFunction(this.contentItem3);
    this.myContentList.addFunction(this.contentItem4);
  }

  displayMyIndex(index : number): string {
    return this.myContentList.printIndex(index);
  }
}
