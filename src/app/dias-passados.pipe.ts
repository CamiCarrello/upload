import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'diasPassados'
})
export class DiasPassadosPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let current_data_comment: Date = new Date();
    let date_comment = new Date(value);
    let Difference_In_Time_comment = current_data_comment.getTime() - date_comment.getTime();
    let Difference_In_Days_comment = Math.round(Difference_In_Time_comment / (1000 * 3600 * 24));
    return Difference_In_Days_comment.toString();
  }
}
