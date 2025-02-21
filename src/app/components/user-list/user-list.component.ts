import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CustomRouteReuseStrategy } from '../../core/route-reuse';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  private _http = inject(HttpClient)
  private _router = inject(Router)
  filterForm !: FormGroup;
  userList: any[] = [];
  private _routeReuseStrategy = inject(CustomRouteReuseStrategy);
  private refreshSubscription!: Subscription;

  constructor() {

  }

  ngOnInit() {
    this.refreshSubscription = this._routeReuseStrategy.refreshComponent$.subscribe(() => {
      this.fetchUsers(10);
    });
    this.fetchUsers(100);
    console.log("user-list component created")
  }

  fetchUsers(limit: number) {
    this._http.post('http://localhost:3000/getData', { limit: limit }).subscribe((data: any) => {
      this.userList = data.data
    })
  }

  gotoDetailedView() {
    this._router.navigate(['/users/details'])
  }

  ngOnDestroy() {
    this.refreshSubscription.unsubscribe();
    console.warn("user-list component destroyed")
  }
}
