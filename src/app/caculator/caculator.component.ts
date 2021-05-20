import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css']
})
export class CaculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  input = '520';
  imgSrc;
  show5(){
    let rad = Math.floor(Math.random() * 12) + 1;
    this.imgSrc='./assets/5 ('+rad+').jpg';
    console.log(this.imgSrc)
    this.input += '5';
    if(this.input.length > 3){
      this.input = this.input.substr(1, 3);
    }
  }

  show2(){
    let rad = Math.floor(Math.random() * 10) + 1;
    this.imgSrc='./assets/2 ('+rad+').jpg';
    this.input += '2';
    if(this.input.length > 3){
      this.input = this.input.substr(1, 3);
    }
  }

  show0(){
    this.input += '0';
    if(this.input.length > 3){
      this.input = this.input.substr(1, 3);
    }
    if(this.input == '520'){
      let rad = Math.floor(Math.random() * 2) + 1;
      this.imgSrc='./assets/520 ('+rad+').png';
    } else {
      let rad = Math.floor(Math.random() * 12) + 1;
      this.imgSrc = './assets/0 ('+rad+').jpg';
    }
  }

}
