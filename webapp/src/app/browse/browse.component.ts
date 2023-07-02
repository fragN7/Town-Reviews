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
        console.error('Error fetching browsed items: ', error);
      }
    );
  }

  seeReviews(){
    this.router.navigateByUrl("");
  }
}
