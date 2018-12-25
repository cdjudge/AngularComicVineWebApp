import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  comics: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getComics().subscribe(data => {
        this.comics = data
        console.log(this.comics);
      }
    );
  }


}