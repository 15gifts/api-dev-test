import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Beer } from '../interfaces/beer';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  public basket: Beer[] = [];
  public basketSource = new Subject<Beer[]>()
  public basket$ = this.basketSource.asObservable();

  constructor() { }

  public addToBasket( beer: Beer ): void {
    if ( this.basket.length < 60 ) {
      if ( this.basket.filter( beerObj => beerObj.name === beer.name ).length < 10 ) {
        this.basket.push( beer );
        this.basketSource.next( this.basket );
        console.log( 'Item added to basket' );
      } else {
        console.log( 'You cannot add this type of beer' );
      }
    } else {
      console.log( 'You cannot add more items to the basket' );
    }
  }

  public removeFromBasket( beer: Beer ): void {
    this.basket = this.basket.filter( beerObj => beerObj.id !== beer.id );
    this.basketSource.next( this.basket );
    console.log( 'Item removed from basket' );
  }
}
