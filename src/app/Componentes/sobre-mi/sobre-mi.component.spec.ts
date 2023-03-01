import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreMIComponent } from './sobre-mi.component';

describe('SobreMIComponent', () => {
  let component: SobreMIComponent;
  let fixture: ComponentFixture<SobreMIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreMIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreMIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
