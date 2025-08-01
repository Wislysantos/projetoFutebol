import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaveamentoComponent } from './chaveamento.component';

describe('ChaveamentoComponent', () => {
  let component: ChaveamentoComponent;
  let fixture: ComponentFixture<ChaveamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChaveamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChaveamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
