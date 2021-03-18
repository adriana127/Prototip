import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';

export interface Image {
  imageName: string;
  imageSize: string;
  recognitionResult: string;
  downloadLink: string;
}
const IMAGES: Image[] = [
  {imageSize: '38402160', imageName: 'Copac', recognitionResult: '123', downloadLink: 'https://www.unitbv.ro/'},
  {imageSize: '38402230', imageName: 'Catel', recognitionResult: '123', downloadLink: 'https://www.unitbv.ro/'},
  {imageSize: '34423160', imageName: 'Lithium', recognitionResult: '123', downloadLink: 'https://www.unitbv.ro/'},
  {imageSize: '9402160', imageName: 'Cascada', recognitionResult:'123', downloadLink: 'https://www.unitbv.ro/'},
  {imageSize: '12344321', imageName: 'Casti', recognitionResult:'123', downloadLink: 'https://www.unitbv.ro/'},
  {imageSize: '32804260', imageName: 'Furculita', recognitionResult: '123', downloadLink: 'https://www.unitbv.ro/'},
  {imageSize: '38402160', imageName: 'Pat', recognitionResult:'123', downloadLink: 'https://www.unitbv.ro/'},
  {imageSize: '42402980', imageName: 'Usa', recognitionResult:'123', downloadLink: 'https://www.unitbv.ro/'},
  {imageSize: '37892210', imageName: 'Covor', recognitionResult:'123', downloadLink: 'https://www.unitbv.ro/'},
  {imageSize: '38402160', imageName: 'Poza', recognitionResult:'123', downloadLink: 'https://www.unitbv.ro/'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  template:'{{element.imageSize|| filesize}}'
})

export class TableComponent{
  displayedColumns: string[] = ['select','imageName', 'imageSize', 'recognitionResult', 'downloadLink'];
  dataSource = new MatTableDataSource<Image>(IMAGES);
  selection = new SelectionModel<Image>(true, []);

isAllSelected() {
  const numSelected = this.selection.selected.length;
  const numRows = this.dataSource.data.length;
  return numSelected === numRows;
}

masterToggle() {
  this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
}

checkboxLabel(row?: Image): string {
  if (!row) {
    return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
  }
  return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.imageName + 1}`;
}

}

