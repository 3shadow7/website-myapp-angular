import { Component } from '@angular/core';

@Component({
  selector: 'app-download-page',
  standalone: true,
  imports: [],
  templateUrl: './download-page.component.html',
  styleUrl: './download-page.component.scss',
})
export class DownloadPageComponent {
  downloadFileAndroid() {
    console.log('download andriod file started');
  }
  downloadFileIOS() {
    console.log('download ios file started');
  }
}
