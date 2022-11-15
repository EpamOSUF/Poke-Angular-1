import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weightPipe'
})
export class weightPipe implements PipeTransform{
  transform(weight: number) {
    return `${weight/10} kg.`
  }
}

@Pipe({
  name: 'heightPipe'
})
export class heightPipe implements PipeTransform{
  transform(height: number) {
    return `${height} mts.`
  }
}
