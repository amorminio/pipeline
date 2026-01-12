import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Clock } from '../components/clock/clock';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Clock],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('pipeline');
  protected apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    if (environment.production) {
      this.apiUrl = this.apiUrl.concat('available');
    } else {
      this.apiUrl = this.apiUrl.concat('daily/USD-BRL/60');
    }

    console.log(this.apiUrl);

    this.http.get(this.apiUrl).subscribe((res) => {
      console.log(res);
    });
  }



}
