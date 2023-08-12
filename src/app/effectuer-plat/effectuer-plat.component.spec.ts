import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectuerPlatComponent } from './effectuer-plat.component';

describe('EffectuerPlatComponent', () => {
  let component: EffectuerPlatComponent;
  let fixture: ComponentFixture<EffectuerPlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EffectuerPlatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EffectuerPlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
