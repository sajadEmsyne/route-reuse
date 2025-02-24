import { Component, inject } from '@angular/core';
import { CustomRouteReuseStrategy } from '../../../core/route-reuse';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {

  private _routeReuseStrategy = inject(CustomRouteReuseStrategy);

  submit() {
    this._routeReuseStrategy.triggerComponentRefresh("Dynamic Data");

  }
}
