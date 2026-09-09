import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Padolina } from './padolina';

describe('Padolina', () => {
  let component: Padolina;
  let fixture: ComponentFixture<Padolina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Padolina],
    }).compileComponents();

    fixture = TestBed.createComponent(Padolina);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
