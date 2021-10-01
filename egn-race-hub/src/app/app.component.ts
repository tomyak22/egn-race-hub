import { Component } from '@angular/core';
import { DRIVER_COL_DEF } from './driver-grid/driver-data/driver.columns';
import { DRIVER_DATA } from './driver-grid/driver-data/driver.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'egn-race-hub';
}
