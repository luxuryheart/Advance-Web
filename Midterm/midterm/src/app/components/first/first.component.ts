import { Component, OnInit } from '@angular/core';

interface user_profile{
  studentid: string,
  name: string,
  gender: string,
  birthyear: number,
  email: string,
  phone: string,
  img: string,
  address: string,
  comment: string
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  profile: user_profile

  constructor() { 
    this.profile = {
      studentid: 'B6318215',
      name: 'Nutthapong Jongjulklang',
      gender: 'Male',
      birthyear: 2001,
      email: 'b6318215@g.sut.ac.th',
      phone: '0801067388',
      img: 'https://i.pinimg.com/originals/bd/62/02/bd62026f23febf34a01a2a0760c16bc0.png',
      address: 'SUT 111 University Avenue, Suranaree Sub-Distric, Muang Nakhon Ratchasima Distric, Nakhon Ratchasima 30000 Thailand',
      comment: ''
    }
  }

  ngOnInit(): void {
  }

  onAddressClick() {
    alert(this.profile.address)
  }

}
