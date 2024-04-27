import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deltTime'
})
export class DeltTimePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    const delt = (new Date(value)).getTime() - (new Date(args[0])).getTime();
    return String(delt / 1000 / 3600);
  }

}
