import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogosQuartasComponent } from './jogos-quartas.component';

describe('JogosQuartasComponent', () => {
  let component: JogosQuartasComponent;
  let fixture: ComponentFixture<JogosQuartasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JogosQuartasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JogosQuartasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
