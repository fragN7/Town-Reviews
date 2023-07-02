import {Component, OnInit} from '@angular/core';
import {ServiceComponent} from "../service/service.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit{

  item: any;
  reviews: any[] = [];

  constructor(private service: ServiceComponent, private router: Router) { }
  ngOnInit() {
    const itemId = parseInt(localStorage.getItem('itemId')!);
    this.getItem(itemId);
  }

  getItem(id: number){
    this.service.getItem(id).subscribe(
      (response: any) => {
        this.item = response;
        this.reviews = response.reviews;
      },
      (error: any) => {
        alert(error.error);
      }
    );
  }

  leaveReview(){
    this.router.navigateByUrl(`/${this.item.title}/review`)
  }
}
