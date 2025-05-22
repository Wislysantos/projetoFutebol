import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogosrodadaComponent } from './jogosrodada.component';

describe('JogosrodadaComponent', () => {
  let component: JogosrodadaComponent;
  let fixture: ComponentFixture<JogosrodadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JogosrodadaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JogosrodadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
