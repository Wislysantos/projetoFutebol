import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraquejogoComponent } from './craquejogo.component';

describe('CraquejogoComponent', () => {
  let component: CraquejogoComponent;
  let fixture: ComponentFixture<CraquejogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CraquejogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CraquejogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
