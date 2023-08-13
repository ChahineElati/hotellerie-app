import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectuerSrvComponent } from './effectuer-srv.component';

describe('EffectuerSrvComponent', () => {
  let component: EffectuerSrvComponent;
  let fixture: ComponentFixture<EffectuerSrvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EffectuerSrvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EffectuerSrvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
