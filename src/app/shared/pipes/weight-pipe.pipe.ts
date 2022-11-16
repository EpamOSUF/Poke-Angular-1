import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weightPipe'
})
export class WeightPipe implements PipeTransform{
  transform(weight: number) {
    return `${weight/10} kg.`
  }
}
