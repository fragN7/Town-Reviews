import {Component, OnInit} from '@angular/core';
import {ServiceComponent} from "../service/service.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{

  item = {
    id: 0,
    name: '',
    rating: 0,
    feedback: ''
  }
  constructor(private service: ServiceComponent, private router: Router) { }
  ngOnInit() {
    this.item.id = parseInt(localStorage.getItem('itemId')!);
  }

  postReview(){
    this.service.postReview(this.item.id, this.item.name, this.item.rating, this.item.feedback).subscribe(
      (response: any) => {
        alert(`Added review`);
        this.router.navigateByUrl("/");
      },
      (error: any) => {
        alert(error.error);
      }
    );
  }
}
