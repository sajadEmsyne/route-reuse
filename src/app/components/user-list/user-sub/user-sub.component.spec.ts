import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSubComponent } from './user-sub.component';

describe('UserSubComponent', () => {
  let component: UserSubComponent;
  let fixture: ComponentFixture<UserSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSubComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
