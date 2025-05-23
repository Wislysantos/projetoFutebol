import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaartilheiroComponent } from './tabelaartilheiro.component';

describe('TabelaartilheiroComponent', () => {
  let component: TabelaartilheiroComponent;
  let fixture: ComponentFixture<TabelaartilheiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelaartilheiroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaartilheiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
