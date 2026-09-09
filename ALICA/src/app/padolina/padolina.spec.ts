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

  it('should display the name', () => {
    expect(component.name()).toBe('Ian Charles Padolina');
  });

  it('should have valid image path', () => {
    expect(component.imagePath()).toBe('assets/images/padolina.png');
  });

  it('should update description on showDescription', () => {
    expect(component.description()).toBe('');
    component.showDescription();
    expect(component.description()).toContain('graphic design');
  });
});