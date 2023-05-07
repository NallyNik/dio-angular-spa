import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaButtonComponent } from './spa-button.component';

describe('SpaButtonComponent', () => {
  let component: SpaButtonComponent;
  let fixture: ComponentFixture<SpaButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
