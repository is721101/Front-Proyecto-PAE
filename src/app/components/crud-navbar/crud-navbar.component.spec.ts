import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudNavbarComponent } from './crud-navbar.component';

describe('CrudNavbarComponent', () => {
  let component: CrudNavbarComponent;
  let fixture: ComponentFixture<CrudNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
