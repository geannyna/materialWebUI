import {Component} from '@angular/core';
import {MatTable, MatTableDataSource, MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  data: any[];
}

const data = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-table-responsive',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './table-responsive.component.html',
  styleUrls: ['./table-responsive.component.css'],

})
export class TableResponsiveComponent {
  // Define los datos para la tabla (puedes reemplazarlos con tus propios datos)

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  
  //dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();
  
  // Crea el dataSource para la tabla
  dataSource = new MatTableDataSource(data);
}
