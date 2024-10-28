import { rowData } from './../../sharing/constant';
import { Component, ViewEncapsulation } from '@angular/core';
import { AgGridAngular, ICellRendererAngularComp } from 'ag-grid-angular';
import { ColDef, ICellComp, ICellRendererParams } from 'ag-grid-community';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
// import 'ag-grid-enterprise';


@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss',
})


export class FeatureComponent implements ICellRendererAngularComp {

  success_class:string[] = [
    'Yes',
    'Extensive',
    'Active',
    'Monthly',
    'All Android devices',
    'High',
    'High performance',
    'Available',
    '24/7',
    'Regular',
    'Cloud & Local',
    'Singleplayer & Multiplayer',
    'Available',
    '24/7',
    'Regular',
  ];

  warning_class:string[] = [
    'Medium',
    'Optional',
    'Bi-Monthly',
    'Growing',
    'iOS 12 and above',
    'Moderate',
    'Business hours',
    'Variable',
    'Occasional',
    'Cloud only',
    'Singleplayer only',
  ];

  danger_class :string[] = [
    'No',
    'Limited',
    'Modern browsers',
    'Coming soon',
  ];


  agInit(params: ICellRendererParams): void {
    throw new Error('Method not implemented.');
  }
  refresh(params: ICellRendererParams): boolean {
    return true;
  }


  defultCol: ColDef = {
    flex: 4,
    cellClassRules: {
      'bgsuccess': p => this.success_class.some((sub) => p.value === sub) ? true : false //* check if the value of cell is match one of the success_class then put the success class on it
      ,
      'bgwarning': p => this.warning_class.some((sub) => p.value === sub) ? true : false
      ,
      'bgdanger': p => this.danger_class.some((sub) => p.value === sub) ? true : false
      ,
    },
  };
 //! header of table
  ColDef: ColDef[] = [
    { headerName: 'Feature', field: 'feature', cellClass: 'first-column' },
    { headerName: 'Android', field: 'android' },
    { headerName: 'iOS', field: 'ios' },
    { headerName: 'Web', field: 'web' },
  ];

 //! rowData of table
 RowDef = rowData ;
}
