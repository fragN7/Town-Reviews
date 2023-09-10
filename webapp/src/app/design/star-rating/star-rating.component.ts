import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit{
  @Input() rating: number = 0; // Input rating value from your parent component
  starsArray: string[] = []; // Array representing the stars

  constructor() { }

  ngOnInit() {
    const fullStars = Math.floor(this.rating); // Get the whole number part
    const hasHalfStar = this.rating - fullStars >= 0.5; // Check for half-star

    this.starsArray = this.createStarsArray(fullStars, hasHalfStar);
    console.log(this.starsArray)
  }

  createStarsArray(fullStars: number, hasHalfStar: boolean): string[] {
    const starsArray: string[] = [];

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        starsArray.push('full');
      } else if (i === fullStars && hasHalfStar) {
        starsArray.push('half');
      } else {
        starsArray.push('empty');
      }
    }

    return starsArray;
  }
}
