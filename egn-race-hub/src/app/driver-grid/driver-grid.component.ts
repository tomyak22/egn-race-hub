import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { DRIVER_COL_DEF } from './driver-data/driver.columns';
import { DRIVER_DATA } from './driver-data/driver.data';

@Component({
  selector: 'app-driver-grid',
  templateUrl: './driver-grid.component.html',
  styleUrls: ['./driver-grid.component.scss']
})
export class DriverGridComponent implements OnInit {
  columnDefs: any;
  rowData: any;
  gridOptions!: GridOptions;
  defaultColumnOptions: any;

  constructor() { 
    this.rowData = DRIVER_DATA;
  }

  ngOnInit(): void {
    this.defaultColumnOptions = {
      sortable: true,
      width: 120,
      resizable: true
    }

    this.gridOptions = {
      columnDefs: DRIVER_COL_DEF,
    };
  }
}
