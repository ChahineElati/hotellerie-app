import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterSrvComponent } from './ajouter-srv.component';

describe('AjouterSrvComponent', () => {
  let component: AjouterSrvComponent;
  let fixture: ComponentFixture<AjouterSrvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterSrvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterSrvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
