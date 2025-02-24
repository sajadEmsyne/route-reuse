import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CustomRouteReuseStrategy } from '../../../core/route-reuse';

@Component({
  selector: 'app-user-sub',
  standalone: true,
  imports: [],
  templateUrl: './user-sub.component.html',
  styleUrl: './user-sub.component.css'
})
export class UserSubComponent {
  private _router = inject(Router);
  private _routeReuseStrategy = inject(CustomRouteReuseStrategy)

  redirectHome() {
    this._router.navigate(['/users'])
  }

  update() {
    this._routeReuseStrategy.triggerComponentRefresh("paul");

  }
}
