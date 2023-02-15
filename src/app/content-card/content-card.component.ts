import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {

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
  }

  displayMyIndex(index : number) {
    // let myItems = this.myContentList.getItems();

    // if (myItems.length > 0 && index > 0 && index < myItems.length){
    //   return this.myContentList.printIndex(index);
    // } else {
    //   return 'error';
    // }
  }
}
