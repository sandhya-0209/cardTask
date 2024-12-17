import { Component, OnInit } from '@angular/core';
import { Icard } from '../../models.ts/cards';
import { postArr } from '../const/const';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }
  postCard: Array<Icard> = postArr;
  ngOnInit(): void {
  }

}
