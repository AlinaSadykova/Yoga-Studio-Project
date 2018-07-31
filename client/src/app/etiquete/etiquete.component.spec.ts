import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtiqueteComponent } from './etiquete.component';

describe('EtiqueteComponent', () => {
  let component: EtiqueteComponent;
  let fixture: ComponentFixture<EtiqueteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtiqueteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtiqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
