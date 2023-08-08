import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id!: string;
  name!: string;
  year!: number;
  imgUrl!: String;

  constructor() { }

    ngOnInit(): void {
      this.id = "B6318215";
      this.name = "Nutthapong Jongjulklang";
      this.year = 2001;
      this.imgUrl = "https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg"
    }

    getName() {
      return this.name;
    }
  

}
