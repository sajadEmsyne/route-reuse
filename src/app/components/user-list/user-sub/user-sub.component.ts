import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-sub',
  standalone: true,
  imports: [],
  templateUrl: './user-sub.component.html',
  styleUrl: './user-sub.component.css'
})
export class UserSubComponent {
  private _router = inject(Router);
  redirectHome() {
    this._router.navigate(['/users'])
  }
}
