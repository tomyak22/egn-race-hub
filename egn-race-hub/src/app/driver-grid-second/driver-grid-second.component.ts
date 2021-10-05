import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { DRIVER_COL_DEF_2 } from './driver-data-second/driver-second.columns';
import { DRIVER_DATA_2 } from './driver-data-second/driver-second.data';

@Component({
  selector: 'app-driver-grid-second',
  templateUrl: './driver-grid-second.component.html',
  styleUrls: ['./driver-grid-second.component.scss']
})
export class DriverGridSecondComponent implements OnInit {
  columnDefs: any;
  rowDataSecond: any;
  gridOptionsSecond!: GridOptions;
  defaultColumnOptions: any;

  constructor() {
    this.rowDataSecond = DRIVER_DATA_2;
   }

  ngOnInit(): void {
    this.defaultColumnOptions = {
      sortable: true,
      width: 120,
      resizable: true
    }

    this.gridOptionsSecond = {
      columnDefs: DRIVER_COL_DEF_2,
    };
  }

}
