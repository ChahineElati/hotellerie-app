import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsEvtComponent } from './clients-evt.component';

describe('ClientsEvtComponent', () => {
  let component: ClientsEvtComponent;
  let fixture: ComponentFixture<ClientsEvtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsEvtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsEvtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
