import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierSrvComponent } from './modifier-srv.component';

describe('ModifierSrvComponent', () => {
  let component: ModifierSrvComponent;
  let fixture: ComponentFixture<ModifierSrvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierSrvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierSrvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
