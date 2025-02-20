import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  private _router = inject(Router);
  routeList = [
    {
      name: "UserList",
      path: '/users'
    },
    {
      name: "BookList",
      path: '/books'
    }
  ]

  gotoPage(path: string) {
    this._router.navigate([path])
  }
}
