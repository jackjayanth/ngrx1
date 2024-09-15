import { Component } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  name1: string;
  position1: number;
  weight1: number;
  symbol1: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', position1: 1, name1: 'Hydrogen', weight1: 1.0079, symbol1: 'H'},
];

@Component({
  selector: 'app-work-ux',
  templateUrl: './work-ux.component.html',
  styleUrls: ['./work-ux.component.css'],
})
export class WorkUxComponent {
  showFiller = true;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'position1', 'name1', 'weight1', 'symbol1'];
  dataSource = ELEMENT_DATA;
  constructor() {}
}
