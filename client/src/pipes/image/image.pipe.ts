import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {
  transform(image: any): any {
    let url = '';
    if (image === undefined) {
      url = '/assets/img/no-image.png';
    } else {
      url = image;
    }
    return url;
  }
}
