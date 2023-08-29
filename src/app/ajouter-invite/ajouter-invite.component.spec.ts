import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterInviteComponent } from './ajouter-invite.component';

describe('AjouterInviteComponent', () => {
  let component: AjouterInviteComponent;
  let fixture: ComponentFixture<AjouterInviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterInviteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
