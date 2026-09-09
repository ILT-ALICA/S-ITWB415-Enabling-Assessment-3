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
});
