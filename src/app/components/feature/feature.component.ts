import { rowData } from '../../shared/constant';
import { Component } from '@angular/core';

import {
  AgGridAngular,
  ICellRendererAngularComp,
  IHeaderAngularComp,
} from 'ag-grid-angular';

import { ColDef, ICellRendererParams, IHeaderParams } from 'ag-grid-community';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import 'ag-grid-enterprise';

export interface HeaderParams {
  icon?: string;
}

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss',
})
export class FeatureComponent implements ICellRendererAngularComp {
  success_class: string[] = [
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

  warning_class: string[] = [
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

  danger_class: string[] = ['No', 'Limited', 'Modern browsers', 'Coming soon'];

  agInit(params: ICellRendererParams): void {
    throw new Error('Method not implemented.');
  }
  refresh(params: ICellRendererParams): boolean {
    return true;
  }

  defultCol: ColDef = {
    flex: 4,
    resizable: false,
    cellClassRules: {
      bgsuccess: (p) =>
        this.success_class.some((sub) => p.value === sub) ? true : false, //* check if the value of cell is match one of the success_class then put the success class on it
      bgwarning: (p) =>
        this.warning_class.some((sub) => p.value === sub) ? true : false,
      bgdanger: (p) =>
        this.danger_class.some((sub) => p.value === sub) ? true : false,
    },
  };
  //! header of table
  ColDef: ColDef[] = [
    {
      headerName: 'Feature',
      field: 'feature',
      cellClass: 'first-column',
      suppressMovable: true,
      headerComponent: HeaderOfGrid,
      headerComponentParams: { icon: `` } as HeaderParams,
    },
    {
      headerName: 'Android',
      field: 'android',
      headerComponent: HeaderOfGrid,
      headerComponentParams: { icon: `android` } as HeaderParams,
    },
    {
      headerName: 'iOS',
      field: 'ios',
      headerComponent: HeaderOfGrid,
      headerComponentParams: { icon: `apple` } as HeaderParams,
    },
    {
      headerName: 'Web',
      field: 'web',
      headerComponent: HeaderOfGrid,
      headerComponentParams: { icon: `browser-chrome` } as HeaderParams,
    },
  ];

  //! rowData of table
  RowDef = rowData;
}

@Component({
  selector: 'grid-header',
  template: `
    <div
      style="display: inline-flex;
        flex-direction: row;
        align-items: baseline;
        flex-wrap: nowrap;
        align-items: center;
        gap: 1em;"
    >
      <p style="margin: 0;font-size: 1.2em;">{{ value }}</p>
      <i style="font-size: 2em;" class="inline bi bi-{{ icon }}"></i>
    </div>
  `,
  styleUrl: './feature.component.scss',
})
export class HeaderOfGrid implements IHeaderAngularComp {
  value?: string;
  icon?: string;

  agInit(params: IHeaderParams & HeaderParams): void {
    this.value = params.displayName;
    this.icon = params.icon;
  }
  refresh(params: IHeaderParams<any, any>): boolean {
    return false;
  }
}
