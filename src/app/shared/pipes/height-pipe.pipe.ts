import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heightPipe'
})
export class HeightPipe implements PipeTransform{
  transform(height: number) {
    return `${height} mts.`
  }
}
