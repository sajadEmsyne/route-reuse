import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CustomRouteReuseStrategy } from '../../core/route-reuse';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  _router = inject(Router);
  private refreshSubscription!: Subscription;
  private _routeReuseStrategy = inject(CustomRouteReuseStrategy);
  dynamicData: any = ''
  ngOnInit() {
    console.log("book component created");
    this.refreshSubscription = this._routeReuseStrategy.refreshComponent.subscribe((data: any) => {
      this.dynamicData = data;
    });
  }
  ngOnDestroy() {
    console.warn("Book component destroyed")
    this.refreshSubscription.unsubscribe();
  }

  gotoDetailedView() {
    this._router.navigate(['/books/details'])
  }
}
