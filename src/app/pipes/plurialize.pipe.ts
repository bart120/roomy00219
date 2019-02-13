import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'plu' })
export class PlurializePipe implements PipeTransform {
    transform(value: any, text: string): any {
        return value > 1 ? `${value} ${text}s` : `${value} ${text}s`;
    }
}
