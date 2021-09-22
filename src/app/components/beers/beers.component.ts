import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Beer } from 'src/app/interfaces/beer';
import { BasketService } from 'src/app/services/basket.service';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit, OnDestroy {
  beers!: Beer[];
  beersCopy!: Beer[];
  subscription!: Subscription;

  constructor( private _beerService: BeerService,
               private _basketService: BasketService ) {}

  ngOnInit(): void {
    this.subscription = this._beerService.getBeers().subscribe( ( beers ) => {
      this.beers = beers;
      this.beersCopy = JSON.parse( JSON.stringify( this.beers ) );
    } );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public search( event: KeyboardEvent ): void {
    const target: HTMLInputElement = <HTMLInputElement> event.target;
    if ( target.value ) {
      this.beers = this.beersCopy.filter( beer => beer.name.toLowerCase().includes( target.value ) );
    } else {
      this.beers = this.beersCopy;
    }
  }

  public onAddToBasket( beer: Beer ): void {
    this._basketService.addToBasket( beer );
  }

}
