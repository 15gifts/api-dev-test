import { Component, Input, OnInit } from '@angular/core';
import { Beer } from 'src/app/interfaces/beer';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit {
  @Input() beer!: Beer;

  constructor() { }

  ngOnInit(): void {
  }

}
