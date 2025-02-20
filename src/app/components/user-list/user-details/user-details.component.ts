import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomRouteReuseStrategy } from '../../../core/route-reuse';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {

  private _fb = inject(FormBuilder);
  homeForm !: FormGroup;
  private _router = inject(Router);
  private _routeReuseStrategy = inject(CustomRouteReuseStrategy)
  genderList = [
    { name: 'Male', id: 1 },
    { name: 'Female', id: 2 },
    { name: 'Prefer not to Say', id: 3 }
  ]
  constructor() {
    this.homeForm = this._fb.group({
      userName: [''],
      gender: [''],
      address: ['']
    })
  }

  ngOnInit() {
    // console.log("Home component Created")
  }

  submitForm() {
    // console.log(this.homeForm.value, "Value")
    this._routeReuseStrategy.triggerComponentRefresh();
  }

  redirectToAbout() {
    this._router.navigate(['/users/sub'])
  }

  ngOnDestroy() {
    // console.log("Home component destroyed")
  }
}
