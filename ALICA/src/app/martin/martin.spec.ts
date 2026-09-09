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
});
