import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvidiaStockComponent } from './nvidia-stock.component';

describe('NvidiaStockComponent', () => {
  let component: NvidiaStockComponent;
  let fixture: ComponentFixture<NvidiaStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NvidiaStockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NvidiaStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
