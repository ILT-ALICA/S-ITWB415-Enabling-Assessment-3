import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Martin } from './martin';

describe('Martin', () => {
  let component: Martin;
  let fixture: ComponentFixture<Martin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Martin],
    }).compileComponents();

    fixture = TestBed.createComponent(Martin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct name', () => {
    expect(component.name()).toBe('Aiven Allyson Martin');
  });

  it('should have the correct image path', () => {
    expect(component.imagePath()).toBe( 'assets/images/martin.png',);
  });

  it('should have a description', () => {
    expect(component.description()).toContain(
      'web development',
    );
  });

  it('should render the MemberPreview component', () => {
    const memberPreview = fixture.nativeElement.querySelector(
      'app-member-preview',
    );

    expect(memberPreview).toBeTruthy();
  });
});