import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelagrupoComponent } from './tabelagrupo.component';

describe('TabelagrupoComponent', () => {
  let component: TabelagrupoComponent;
  let fixture: ComponentFixture<TabelagrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelagrupoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelagrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
