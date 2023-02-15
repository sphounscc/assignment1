import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})

export class ContentListComponent {

  contentItem1 : Content = {
    id: 0,
    title: 'mySampleTitle',
    description: 'This is a description',
    creator: 'Creator',
    imgURL: 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png',
    tags: ['New', 'Fun'],
    type: 'Exciting'
  }
  contentItem2 : Content = {
    id: 1,
    title: 'mySampleTitle2',
    description: 'This is a description2',
    creator: 'Creator2',
    type: 'Boring'
  }
  contentItem3 : Content = {
    id: 2,
    title: 'mySampleTitle3',
    description: 'This is a description4',
    creator: 'Creator2'
  }
  contentItem4 : Content = {
    id: 3,
    title: 'mySampleTitle4',
    description: 'This is a description4',
    creator: 'Creator'
  }
  contentItem5 : Content = {
    id: 4,
    title: 'mySampleTitle5',
    description: 'This is a description5',
    creator: 'Creator3'
  }
  contentItem6 : Content = {
    id: 5,
    title: 'mySampleTitle6',
    description: 'This is a description6',
    creator: 'Creator'
  }
  contentItem7 : Content = {
    id: 6,
    title: 'mySampleTitle7',
    description: 'This is a description7',
    creator: 'Creator'
  }

  myContentArray : Content[] = [this.contentItem1, this.contentItem2, this.contentItem3, this.contentItem4, this.contentItem5, this.contentItem6, this.contentItem7];
}
