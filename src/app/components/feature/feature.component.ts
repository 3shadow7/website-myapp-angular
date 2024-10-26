import { Component } from '@angular/core';
import { AgGridAngular, ICellRendererAngularComp } from 'ag-grid-angular';
import { ColDef, ICellComp, ICellRendererParams } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements ICellRendererAngularComp {

  agInit(params: ICellRendererParams): void {
    throw new Error('Method not implemented.');
  }
  refresh(params: ICellRendererParams): boolean {
    throw new Error('Method not implemented.');
    return false;
  }



  ColDef: ColDef[] = [
    {field: "Feature/Aspect" , cellClass: 'first-column'},
    {field:"Android Pixel Game App"},
    {field:"Web Pixel Game App"},
    {field:"iOS Pixel Game App"},
  ];

  rowData = [{
    "Feature/Aspect": "Platform",
    "Android Pixel Game App": "Android OS",
    "Web Pixel Game App": "Cross-platform (browser-based)",
    "iOS Pixel Game App": "iOS"
  },
  {
    "Feature/Aspect": "Development Cost",
    "Android Pixel Game App": "Moderate (Java/Kotlin)",
    "Web Pixel Game App": "Generally lower (HTML/CSS/JS)",
    "iOS Pixel Game App": "Higher (Swift/Objective-C)"
  },
  {
    "Feature/Aspect": "User Experience",
    "Android Pixel Game App": "Native gaming experience",
    "Web Pixel Game App": "Limited by browser capabilities",
    "iOS Pixel Game App": "Native gaming experience"
  },
  {
    "Feature/Aspect": "Performance",
    "Android Pixel Game App": "High (access to device resources)",
    "Web Pixel Game App": "Moderate (browser performance varies)",
    "iOS Pixel Game App": "High (optimized for iOS)"
  },
  {
    "Feature/Aspect": "Graphics Quality",
    "Android Pixel Game App": "High resolution and effects",
    "Web Pixel Game App": "Limited by browser rendering",
    "iOS Pixel Game App": "High resolution and effects"
  },
  {
    "Feature/Aspect": "Offline Play",
    "Android Pixel Game App": "Yes (local storage capabilities)",
    "Web Pixel Game App": "Limited (mostly online)",
    "iOS Pixel Game App": "Yes (local data storage)"
  },
  {
    "Feature/Aspect": "Updates",
    "Android Pixel Game App": "Manual via Play Store",
    "Web Pixel Game App": "Instant updates (server-side)",
    "iOS Pixel Game App": "Manual via App Store"
  },
  {
    "Feature/Aspect": "Distribution",
    "Android Pixel Game App": "Google Play Store",
    "Web Pixel Game App": "Accessible via URL",
    "iOS Pixel Game App": "App Store"
  },
  {
    "Feature/Aspect": "Monetization",
    "Android Pixel Game App": "In-app purchases, ads",
    "Web Pixel Game App": "Ads, one-time purchase",
    "iOS Pixel Game App": "In-app purchases, ads"
  },
  {
    "Feature/Aspect": "Development Time",
    "Android Pixel Game App": "Moderate to long",
    "Web Pixel Game App": "Shorter (faster iterations)",
    "iOS Pixel Game App": "Longer (more extensive testing)"
  },
  {
    "Feature/Aspect": "Device Access",
    "Android Pixel Game App": "Full access (input, sensors)",
    "Web Pixel Game App": "Limited access",
    "iOS Pixel Game App": "Full access (input, sensors)"
  },
  {
    "Feature/Aspect": "User Engagement",
    "Android Pixel Game App": "Push notifications, achievements",
    "Web Pixel Game App": "Limited notifications",
    "iOS Pixel Game App": "Push notifications, achievements"
  },
  {
    "Feature/Aspect": "Security",
    "Android Pixel Game App": "Moderate (device-specific)",
    "Web Pixel Game App": "Depends on implementation",
    "iOS Pixel Game App": "High (App Store review process)"
  },
  {
    "Feature/Aspect": "Maintenance",
    "Android Pixel Game App": "Ongoing (device fragmentation)",
    "Web Pixel Game App": "Ongoing (browser compatibility)",
    "iOS Pixel Game App": "Ongoing (iOS updates)"
  }]
}
