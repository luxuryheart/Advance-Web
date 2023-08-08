import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  comment!: string;

  constructor() { }

  ngOnInit(): void {
      this.comment = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vitae suscipit autem explicabo temporibus ratione at sint recusandae eum cumque dicta eligendi ut nihil quia et maiores, eaque quidem quo!"
  }

  onUserClick($e?:any){
    alert('You' +$e.type+ ' the button at (' +$e.clientX+','+$e.clientY+')');
  }

  onUserDbclick($e?:any){
    alert('You'+$e.type+' the button');
  }

}
