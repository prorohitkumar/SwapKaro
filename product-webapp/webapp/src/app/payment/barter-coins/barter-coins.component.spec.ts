import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarterCoinsComponent } from './barter-coins.component';

describe('BarterCoinsComponent', () => {
  let component: BarterCoinsComponent;
  let fixture: ComponentFixture<BarterCoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarterCoinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarterCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
