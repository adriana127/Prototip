import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filesizepipe' })
export class FileSizePipe implements PipeTransform {
    transform(imageSize: number): string {
        return (imageSize / (1024 * 1024)).toFixed(2) + 'MB';
      }
}