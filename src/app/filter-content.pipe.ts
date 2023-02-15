import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'filterContent'
})
export class FilterContentPipe implements PipeTransform {

  transform(contentArray: Array<Content>, type?: string): unknown {
    if(contentArray) {
      if(type) {
        return contentArray.filter(content => content.type === type);
      } else {
        return contentArray.filter(content => (content.type === '' || content.type === undefined || content.type === null));
      }
    } else return;
  }
}
