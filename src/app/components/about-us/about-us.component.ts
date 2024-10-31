import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {
  value$SG = signal<string>('');
  update_value$SG(event: Event) {
    let value = (event.target as HTMLInputElement).value;
    console.log(value);
    this.value$SG.set(value);
  }
}
