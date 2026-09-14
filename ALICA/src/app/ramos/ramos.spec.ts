import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ramos } from './ramos';

describe('Ramos', () => {
  let component: Ramos;
  let fixture: ComponentFixture<Ramos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ramos],
    }).compileComponents();

    fixture = TestBed.createComponent(Ramos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the name', () => {
    expect(component.name()).toBe('Lenard Kristan A. Ramos');
  });

  it('should have valid image path', () => {
    expect(component.imagePath()).toBe('assets/images/ramos.png');
  });

    it('should have valid description', () => {
    expect(component.description()).toContain('functional web apps');
  });

  it('should render the member preview component', () => {
    const previewElement =
      fixture.nativeElement.querySelector('app-member-preview');
    expect(previewElement).toBeTruthy();
  });
});
