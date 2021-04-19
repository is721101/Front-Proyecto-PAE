import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatilloCRUDComponent } from './platillo-crud.component';

describe('PlatilloCRUDComponent', () => {
  let component: PlatilloCRUDComponent;
  let fixture: ComponentFixture<PlatilloCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatilloCRUDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatilloCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
