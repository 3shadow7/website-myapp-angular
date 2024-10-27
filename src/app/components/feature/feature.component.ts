import { Component, ViewEncapsulation } from '@angular/core';
import { AgGridAngular, ICellRendererAngularComp } from 'ag-grid-angular';
import { ColDef, ICellComp, ICellRendererParams } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss',
})
export class FeatureComponent implements ICellRendererAngularComp {
  agInit(params: ICellRendererParams): void {
    throw new Error('Method not implemented.');
  }
  refresh(params: ICellRendererParams): boolean {
    return true;
  }

  defultCol: ColDef = {
    flex: 4,
    cellClassRules: {
      'bg-success': (p) => {
        let substrings = [
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
        let allIncluded = substrings.some((sub) => p.value === sub);
        if (allIncluded) {
          return true;
        }
        console.log(
          p.value,
          substrings.some((sub) => p.value === sub)
        );
        return false;
      },
      'bg-warning': (p) => {
        let substrings = [
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
        let allIncluded = substrings.some((sub) => p.value === sub);
        if (allIncluded) {
          return true;
        }
        console.log(
          p.value,
          substrings.some((sub) => p.value === sub)
        );
        return false;
      },
      'bg-danger': (p) => {
        let substrings = ['No', 'Limited', 'Modern browsers', 'Coming soon'];
        let allIncluded = substrings.some((sub) => p.value === sub);
        if (allIncluded) {
          return true;
        }
        console.log(
          p.value,
          substrings.some((sub) => p.value === sub)
        );
        return false;
      },
    },
  };

  ColDef: ColDef[] = [
    { headerName: 'Feature', field: 'feature', cellClass: 'first-column' },
    { headerName: 'Android', field: 'android' },
    { headerName: 'iOS', field: 'ios' },
    { headerName: 'Web', field: 'web' },
  ];

  rowData = [
    {
      feature: 'Graphics Quality',
      android: 'High',
      ios: 'High',
      web: 'Medium',
    },
    {
      feature: 'Multiplayer Support',
      android: 'Yes',
      ios: 'Yes',
      web: 'No',
    },
    {
      feature: 'Touch Controls',
      android: 'Yes',
      ios: 'Yes',
      web: 'No',
    },
    {
      feature: 'Cross-Platform Play',
      android: 'Yes',
      ios: 'Yes',
      web: 'Yes',
    },
    {
      feature: 'In-Game Purchases',
      android: 'Yes',
      ios: 'Yes',
      web: 'Optional',
    },
    {
      feature: 'Achievements',
      android: 'Yes',
      ios: 'Yes',
      web: 'Limited',
    },
    {
      feature: 'Offline Mode',
      android: 'Yes',
      ios: 'Yes',
      web: 'No',
    },
    {
      feature: 'Updates Frequency',
      android: 'Monthly',
      ios: 'Monthly',
      web: 'Bi-Monthly',
    },
    {
      feature: 'Customization Options',
      android: 'Extensive',
      ios: 'Extensive',
      web: 'Limited',
    },
    {
      feature: 'User Community',
      android: 'Active',
      ios: 'Active',
      web: 'Growing',
    },
    {
      feature: 'Device Compatibility',
      android: 'All Android devices',
      ios: 'iOS 12 and above',
      web: 'Modern browsers',
    },
    {
      feature: 'Social Media Integration',
      android: 'Yes',
      ios: 'Yes',
      web: 'Limited',
    },
    {
      feature: 'Performance Optimization',
      android: 'High performance',
      ios: 'High performance',
      web: 'Variable',
    },
    {
      feature: 'Event Participation',
      android: 'Yes',
      ios: 'Yes',
      web: 'No',
    },
    {
      feature: 'Tutorials and Guides',
      android: 'Available',
      ios: 'Available',
      web: 'Coming soon',
    },
    {
      feature: 'Character Customization',
      android: 'Extensive',
      ios: 'Extensive',
      web: 'Moderate',
    },
    {
      feature: 'Graphic Settings Adjustments',
      android: 'Yes',
      ios: 'Yes',
      web: 'Limited',
    },
    {
      feature: 'Customer Support',
      android: '24/7',
      ios: '24/7',
      web: 'Business hours',
    },
    {
      feature: 'Community Events',
      android: 'Regular',
      ios: 'Regular',
      web: 'Occasional',
    },
    {
      feature: 'Save Game Progress',
      android: 'Cloud & Local',
      ios: 'Cloud & Local',
      web: 'Cloud only',
    },
    {
      feature: 'Game Modes',
      android: 'Singleplayer & Multiplayer',
      ios: 'Singleplayer & Multiplayer',
      web: 'Singleplayer only',
    },
    {
      feature: 'Beta Testing Opportunities',
      android: 'Yes',
      ios: 'Yes',
      web: 'No',
    },
    {
      feature: 'Accessibility Features',
      android: 'Yes',
      ios: 'Yes',
      web: 'Limited',
    },
  ];
}
