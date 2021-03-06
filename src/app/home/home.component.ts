import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  cards = [{
    title: 'Title of the design #1',
    color: 'BLACK',
    type: 'frontOnly',
    images:{
      frontImage:'https://source.unsplash.com/random/300x400'
    }
  },{
    title: 'Title of the design #2',
    color: 'WHITE',
    type: 'backOnly',
    images:{
      backImage : 'https://source.unsplash.com/random/300x400'
    }
    
  },{
    title: 'Title of the design',
    color: 'NAVY',
    type: 'frontPriority',
    images : {
      frontImage: 'https://source.unsplash.com/random/300x400',
      backImage: 'https://source.unsplash.com/random/300x400'
    }
  },{
    title: 'Title of the design',
    color: 'WHITE',
    type: 'backPriority',
    images : {
      frontImage: 'https://source.unsplash.com/random/300x400',
      backImage: 'https://source.unsplash.com/random/300x400'
    }
  },
]
  ngOnInit(): void {
  }

}
