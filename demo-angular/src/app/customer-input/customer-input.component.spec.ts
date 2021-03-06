import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInputComponent } from './customer-input.component';

describe('CustomerInputComponent', () => {
  let component: CustomerInputComponent;
  let fixture: ComponentFixture<CustomerInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
