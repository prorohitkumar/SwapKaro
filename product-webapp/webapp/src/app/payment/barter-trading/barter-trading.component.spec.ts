import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarterTradingComponent } from './barter-trading.component';

describe('BarterTradingComponent', () => {
  let component: BarterTradingComponent;
  let fixture: ComponentFixture<BarterTradingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarterTradingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarterTradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
