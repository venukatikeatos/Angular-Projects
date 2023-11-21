
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    // Delay for 2 seconds (adjust the duration as needed)
    setTimeout(() => {
      this.router.navigate(['/main']); // Navigate to your main application page
    }, 5000);
  }
}