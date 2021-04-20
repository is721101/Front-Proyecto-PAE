import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesaCRUDComponent } from './mesa-crud.component';

describe('MesaCRUDComponent', () => {
  let component: MesaCRUDComponent;
  let fixture: ComponentFixture<MesaCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesaCRUDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesaCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
