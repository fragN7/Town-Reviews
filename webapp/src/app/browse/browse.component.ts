import {Component, OnInit} from '@angular/core';
import {ServiceComponent} from "../service/service.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})

export class BrowseComponent implements OnInit{

  items: any[] = [];
  isHovered: boolean = false;
  constructor(private service: ServiceComponent, private router: Router) { }
  ngOnInit() {
    this.getItems();
  }

  getItems(){
    this.service.getItems().subscribe(
      (response: any[]) => {
        this.items = response;
      },
      (error: any) => {
        alert(error.error);
      }
    );
  }

  seeReviews(id: number, title: string){
    localStorage.setItem('itemId', id.toString());
    this.router.navigateByUrl(`/${title}`);
  }

  // STYLING DOWN HERE

  addHoverClass(item: any) {
    item.isHovered = true;
  }

  // Function to remove the "hovered" class when leaving an item
  removeHoverClass(item: any) {
    item.isHovered = false;
  }

  getFullStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  getPartialStarWidth(rating: number): number {
    return (rating - Math.floor(rating)) * 100;
  }
}
