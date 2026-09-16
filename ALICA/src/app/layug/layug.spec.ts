import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Layug } from './layug';

describe('Layug', () => {
  let component: Layug;
  let fixture: ComponentFixture<Layug>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Layug],
    }).compileComponents();

    fixture = TestBed.createComponent(Layug);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return the correct member name', () => {
    expect(component.name()).toBe('Charlz Edison Layug');
  });

  it('should point to the correct image asset path for the profile', () => {
    expect(component.imagePath()).toBe('assets/images/layug.jpg');
  });

  it('should contain the correct description string', () => {
    expect(component.description()).toContain('creative works');
  });

  it('should render the MemberPreview component', () => {
    const memberPreview = fixture.nativeElement.querySelector(
      'app-member-preview',
    );

    expect(memberPreview).toBeTruthy();
  });

});
