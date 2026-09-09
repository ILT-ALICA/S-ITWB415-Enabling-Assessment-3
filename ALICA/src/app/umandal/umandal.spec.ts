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

  it('should display the name', () => {
    expect(component.name()).toBe('Alen Mikel Umandal');
  });

  it('should have valid image path', () => {
    expect(component.imagePath()).toBe('assets/images/umandal.png');
  });
});
