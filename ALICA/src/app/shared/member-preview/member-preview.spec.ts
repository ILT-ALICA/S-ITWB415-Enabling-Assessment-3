import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MemberPreview } from './member-preview';

describe('MemberPreview', () => {
  let component: MemberPreview;
  let fixture: ComponentFixture<MemberPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberPreview],
    }).compileComponents();

    fixture = TestBed.createComponent(MemberPreview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept inputs', () => {
    fixture.componentRef.setInput('name', 'Test Member');
    fixture.componentRef.setInput('imagePath', 'assets/images/test.png');
    fixture.componentRef.setInput('description', 'Test description content.');

    expect(component.name()).toBe('Test Member');
    expect(component.imagePath()).toBe('assets/images/test.png');
    expect(component.description()).toBe('Test description content.');
  });

  it('should initialize with empty displayedDescription', () => {
    expect(component.displayedDescription()).toBe('');
  });

  it('should toggle description on showDescription call', () => {
    fixture.componentRef.setInput('description', 'Sample description.');

    component.showDescription();
    expect(component.displayedDescription()).toBe('Sample description.');

    component.showDescription();
    expect(component.displayedDescription()).toBe('');
  });

  it('should toggle description when button is clicked', () => {
    fixture.componentRef.setInput('description', 'Sample description.');
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector(
      '.description-button',
    ) as HTMLButtonElement;
    const paragraph = fixture.nativeElement.querySelector(
      '.profile-description',
    ) as HTMLParagraphElement;

    expect(paragraph.textContent).toBe('');

    button.click();
    fixture.detectChanges();
    expect(paragraph.textContent).toBe('Sample description.');

    button.click();
    fixture.detectChanges();
    expect(paragraph.textContent).toBe('');
  });
});
