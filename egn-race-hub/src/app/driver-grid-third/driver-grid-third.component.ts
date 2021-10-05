import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { DRIVER_COL_DEF_3 } from './driver-data-third/driver-third.columns';
import { DRIVER_DATA_3 } from './driver-data-third/driver-third.data';

@Component({
  selector: 'app-driver-grid-third',
  templateUrl: './driver-grid-third.component.html',
  styleUrls: ['./driver-grid-third.component.scss']
})
export class DriverGridThirdComponent implements OnInit {
  columnDefs: any;
  rowDataThird: any;
  gridOptionsThird!: GridOptions;
  defaultColumnOptions: any;

  constructor() { 
    this.rowDataThird = DRIVER_DATA_3;
  }

  ngOnInit(): void {
    this.defaultColumnOptions = {
      sortable: true,
      width: 120,
      resizable: true
    }

    this.gridOptionsThird = {
      columnDefs: DRIVER_COL_DEF_3,
    };
  }

}
