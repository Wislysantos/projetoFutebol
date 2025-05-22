import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrocinoComponent } from './patrocino.component';

describe('PatrocinoComponent', () => {
  let component: PatrocinoComponent;
  let fixture: ComponentFixture<PatrocinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatrocinoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatrocinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
