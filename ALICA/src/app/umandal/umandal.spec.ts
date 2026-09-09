import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Umandal } from './umandal';

describe('Umandal', () => {
  let component: Umandal;
  let fixture: ComponentFixture<Umandal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Umandal],
    }).compileComponents();

    fixture = TestBed.createComponent(Umandal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
