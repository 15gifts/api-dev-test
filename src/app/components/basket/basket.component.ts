import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Beer } from 'src/app/interfaces/beer';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit, OnDestroy {
  basket: Beer[] = [];
  subscription!: Subscription;

  constructor( private _basketService: BasketService ) { }

  ngOnInit(): void {
    this.basket = this._basketService.basket;
    this.subscription = this._basketService.basketSource.subscribe( beers => {
      this.basket = beers;
    } )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onRemoveFromBasket( beer: Beer ): void {
    this._basketService.removeFromBasket( beer );
  }

}
