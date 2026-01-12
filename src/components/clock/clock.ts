import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
@Component({
  selector: 'clock',
  imports: [],
  templateUrl: './clock.html',
  styleUrl: './clock.scss',
})
export class Clock {

  environment = environment;
  clock: Date = new Date();

  ngOnInit(): void {
    console.log(this.environment.apiUrl);
    console.log('CLOCK >>', this.clock);
  }
}
