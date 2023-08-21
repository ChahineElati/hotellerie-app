import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterEvComponent } from './ajouter-ev.component';

describe('AjouterEvComponent', () => {
  let component: AjouterEvComponent;
  let fixture: ComponentFixture<AjouterEvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterEvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterEvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
